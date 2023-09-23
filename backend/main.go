package main

import (
	"fmt"

	"github.com/Ryoto-kubo/link-box/backend/config"
	"github.com/gin-gonic/gin"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)
func main() {
	dsn = fmt.Sprintf("%s:%s@(%s)/%s?charset=utf8&parseTime=True&loc=Local", config.Database.Username, config.Database.Password, config.Database.Host, config.Database.Dbname)
  db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})

	r := gin.Default()
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "SUCCESS!!!!",
		})
	})
	r.GET("/hoge", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "hoge!!!!",
		})
	})
	r.GET("/foo", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "hoge!!!!",
		})
	})
	r.Run(":8032")
}
