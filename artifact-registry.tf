resource "google_artifact_registry_repository" "link-box-repo" {
  provider = google-beta

  location      = "asia-northeast1"
  repository_id = "link-box-repo"
  description   = "link box repository"
  format        = "DOCKER"
}