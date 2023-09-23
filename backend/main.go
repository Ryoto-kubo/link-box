package main

import (
	"embed"

	"github.com/Ryoto-kubo/link-box/backend/config"
	"github.com/Ryoto-kubo/link-box/backend/logger"
	"github.com/Ryoto-kubo/link-box/backend/repository"
	"github.com/gin-gonic/gin"
)

//go:embed resources/config/application.*.yml
var yamlFile embed.FS

//go:embed resources/config/zaplogger.*.yml
var zapYamlFile embed.FS

func main() {
	conf, env := config.LoadAppConfig(yamlFile)
	logger := logger.InitLogger(env, zapYamlFile)
	logger.GetZapLogger().Infof("Loaded this configuration : application." + env + ".yml")

	rep := repository.NewLinkBoxRepository(logger, conf)

	r := gin.Default()
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})

	r.Run(":8032")
}
