# syntax=docker/dockerfile:1

FROM golang:1.20-alpine

# Set destination for COPY
COPY ./backend /backend

WORKDIR /backend

# RUN apk update \
# && apk add --no-cache git \
# && go get github.com/gin-gonic/gin@v1.9.0 \
# && go get -u gorm.io/gorm@v1.25.1 \
# && go get -u gorm.io/driver/mysql@v1.5.1 \

CMD ["go", "run", "main.go"]

EXPOSE 8302