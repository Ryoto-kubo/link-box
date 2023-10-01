## backend

### How to run

```
$ cd docker
# docker-compose -f docker-compose.local.yml up -d
```

### Deploy

```
$ docker build --platform linux/amd64 -f Dockerfile.gcr -t asia-northeast1-docker.pkg.dev/link-box-stg-400005/link-box-repo/api-image:latest .
$ docker push asia-northeast1-docker.pkg.dev/link-box-stg-400005/link-box-repo/api-image:latest
```

### DB Migration

Install `golang-migrate`

```
$ brew install golang-migrate
```

```
$ migrate --path database/migrations --database 'mysql://testuser:password@tcp(0.0.0.0:3309)/link-box' -verbose up
```

## frontend

### How to run

```
$ cd frontend/user
$ npm run dev
```
