# syntax=docker/dockerfile:1

FROM golang:1.20-alpine

# Set destination for COPY
COPY ./backend /backend

WORKDIR /backend/app

RUN apk update \
&& apk add --no-cache git \
&& go get github.com/gin-gonic/gin@v1.9.0 \
&& go get github.com/jinzhu/gorm@latest \
&& go get github.com/go-sql-driver/mysql@latest

CMD ["go", "run", "main.go"]

EXPOSE 8302