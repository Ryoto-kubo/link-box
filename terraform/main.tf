provider "google" {
  project     = var.project_id
  credentials = file("/Users/kuboryoto/.config/gcloud/configurations/link-box-stg-400005-3907b2faee93.json")
  zone    = "us-central1-c"
}
provider "google-beta" {
  project     = var.project_id
  credentials = file("/Users/kuboryoto/.config/gcloud/configurations/link-box-stg-400005-3907b2faee93.json")
}

// ------ VPC ------
resource "google_compute_network" "vpc" {
  project = var.project_id
  name = var.vpc_name
}
resource "google_project_iam_member" "vpc_admin" {
  project = var.project_id
  role    = "roles/compute.networkAdmin"
  member  = "user:ryoto.kubo.32@gmail.com"
}


# ------ Serverless VPC Access Connector ------
resource "google_vpc_access_connector" "connector" {
  name          = var.vpc_access_connector_name
  region        = var.region
  network       = google_compute_network.vpc.name
  ip_cidr_range = "10.8.0.0/28"
}
resource "google_project_iam_member" "vpc_connector_admin" {
  project = var.project_id
  role    = "roles/vpcaccess.admin"
  member  = "user:ryoto.kubo.32@gmail.com"
}


# ------ Service Networking Connection ------
resource "google_service_networking_connection" "private_vpc_connection" {
  network                 = google_compute_network.vpc.self_link
  service                 = "servicenetworking.googleapis.com"
  reserved_peering_ranges = [google_compute_global_address.private_ip_address.name]
}


# ------ Compute Global Address ------
resource "google_compute_global_address" "private_ip_address" {
  name          = "private-ip-address"
  purpose       = "VPC_PEERING"
  address_type  = "INTERNAL"
  address       = "10.20.0.0"
  prefix_length = 16
  network       = google_compute_network.vpc.self_link
}


// ------ Cloud SQL ------
resource "google_sql_database_instance" "default" {
  name             = var.db_dinstance_name
  region           = var.region
  database_version = "MYSQL_8_0_31"
  root_password    = "link-box"
  depends_on       = [google_service_networking_connection.private_vpc_connection]

  settings {
    tier      = "db-f1-micro"
    ip_configuration {
      private_network = google_compute_network.vpc.id
    }
  }
  deletion_protection = "false"
}
resource "google_sql_database" "default" {
  name       = "link-box"
  instance   = google_sql_database_instance.default.name
}
resource "google_sql_user" "default" {
  name     = "testuser"
  instance = google_sql_database_instance.default.name
  password = "password"
  host     = "%"
}
resource "google_project_iam_member" "cloud_sql_admin" {
  project = var.project_id
  role    = "roles/cloudsql.admin"
  member  = "user:ryoto.kubo.32@gmail.com"
}


// ------ Cloud Run ------
resource "google_cloud_run_service" "default" {
  name     = var.cloud_run_name
  location = var.region

  template {
    spec {
      containers {
        # image = "asia-northeast1-docker.pkg.dev/link-box-stg-400005/link-box-repo/api-image/0411b7cc3015579dd769a96f65ce561ead72b12d7359de36b82ab76696266700"
        # ports {
        #   container_port = 8302
        # }
        image = "gcr.io/cloudrun/hello"
        ports {
          container_port = 8302
        }
        env {
          name  = "DB_HOST"
          value = google_sql_database_instance.default.connection_name
        }
        env {
          name  = "DB_USER"
          value = google_sql_user.default.name
        }
        env {
          name  = "DB_PASS"
          value = google_sql_user.default.password
        }
        env {
          name  = "DB_NAME"
          value = google_sql_database.default.name
        }
      }
    }
    metadata {
      annotations = {
        "autoscaling.knative.dev/maxScale"        = "5"
        "run.googleapis.com/cloudsql-instances"   = google_sql_database_instance.default.connection_name
        "run.googleapis.com/vpc-access-connector" = google_vpc_access_connector.connector.name
        "run.googleapis.com/client-name"          = "terraform"
      }
    }
  }
}
data "google_iam_policy" "noauth" {
  binding {
    role = "roles/run.invoker"
    members = [
      "allUsers",
    ]
  }
}
resource "google_cloud_run_service_iam_policy" "noauth" {
  location    = google_cloud_run_service.default.location
  project     = google_cloud_run_service.default.project
  service     = google_cloud_run_service.default.name

  policy_data = data.google_iam_policy.noauth.policy_data
}