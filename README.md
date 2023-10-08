## backend

### How to run

```
$ cd docker
# docker-compose -f docker-compose.local.yml up -d
```

### Deploy

```
$ sh tools/docker-image-deploy.sh
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
