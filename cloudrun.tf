resource "google_cloud_run_service" "default" {
  name     = "cloudrun-srv"
  location = "asia-northeast1"

  template {
    spec {
      containers {
        image = "gcr.io/cloudrun/hello"
        ports {
          container_port = 8302
        }
      }
    }
  }
  # template {
  #   spec {
  #     containers {
  #       image = "asia-northeast1-docker.pkg.dev/link-box-stg-400005/link-box-repo/api-image:latest"
  #     }
  #   }
  # }
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