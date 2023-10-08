provider "google" {
  project     = "link-box-stg-400005"
  credentials = file("/Users/kuboryoto/.config/gcloud/configurations/link-box-stg-400005-3907b2faee93.json")
  zone    = "us-central1-c"
}

provider "google-beta" {
  project     = "link-box-stg-400005"
  credentials = file("/Users/kuboryoto/.config/gcloud/configurations/link-box-stg-400005-3907b2faee93.json")
}