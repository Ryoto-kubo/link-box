package main

import (
	"embed"
	"fmt"
	"os"

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
	//
	dbName := os.Getenv("MYSQL_DATABASE")
	dbUser := os.Getenv("MYSQL_USER")
	dbPassword := os.Getenv("MYSQL_PASSWORD")
	dbHost := os.Getenv("MYSQL_HOST")
	dsn := fmt.Sprintf("%s:%s@tcp(%s)/%s?charset=utf8&parseTime=true",dbUser, dbPassword, dbHost, dbName)
		// dsn := "testuser:password@tcp(10.20.0.7)/link-box?charset=utf8&parseTime=true"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}


	r := gin.Default()
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"hoge": mustGet("MYSQL_HOST"),
		})
	})
	r.GET("/users", func(c *gin.Context) {
		var users []User
		db.Unscoped().Find(&users)
		c.JSON(200, users)
	})

	r.Run(":8302")
}

func mustGet(arg string) string{
	env := os.Getenv(arg)
	if env == ""{
			panic("env not found")
	}
	return env
}