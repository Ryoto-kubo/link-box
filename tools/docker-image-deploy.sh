#!/bin/bash
cd backend

# Docker イメージをビルドする
docker build --platform linux/amd64 -f Dockerfile.gcr -t asia-northeast1-docker.pkg.dev/link-box-stg-400005/link-box-repo/api-image:latest .

# Docker イメージをプッシュする
docker push asia-northeast1-docker.pkg.dev/link-box-stg-400005/link-box-repo/api-image:latest
