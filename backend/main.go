package main

import (
	"embed"

	"github.com/gin-gonic/gin"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

//go:embed resources/config/application.*.yml
var yamlFile embed.FS

//go:embed resources/config/zaplogger.*.yml
var zapYamlFile embed.FS

type User struct {
	gorm.Model
	Id  int `gorm:"primaryKey" json:"id"`
	UserName string `json:"user_name"`
	Email string `json:"email"`
	Password string `json:"password"`
}


func main() {
	// conf, env := config.LoadAppConfig(yamlFile)
	// logger := logger.InitLogger(env, zapYamlFile)
	// logger.GetZapLogger().Infof("Loaded this configuration : application." + env + ".yml")

	// rep := repository.NewLinkBoxRepository(logger, conf)

	dsn := "testuser:password@tcp(10.20.0.7)/link-box?charset=utf8&parseTime=true"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}


	r := gin.Default()
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})
	r.GET("/users", func(c *gin.Context) {
		var users []User
		db.Unscoped().Find(&users)
		c.JSON(200, users)
	})

	r.Run(":8302")
}
