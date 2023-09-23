package config

import (
	"embed"
	"flag"
	"fmt"
	"os"

	"gopkg.in/yaml.v3"
)

type Config struct {
	Database struct {
		Dialect   string `default:"mysql"`
		Host      string `default:"127.0.0.1"`
		Port      string
		Dbname    string
		Username  string
		Password  string
		Migration bool `default:"false"`
	}
	Log struct {
		RequestLogFormat string `yaml:"request_log_format" default:"${remote_ip} ${account_name} ${uri} ${method} ${status}"`
	}
}

// loadAppConfig reads the settings written to the yml file
func LoadAppConfig(yamlFile embed.FS) (*Config, string) {
	var env *string
	if value := os.Getenv("WEB_APP_ENV"); value != "" {
		env = &value
	} else {
		env = flag.String("env", "develop", "To switch configurations.")
		flag.Parse()
	}

	file, err := yamlFile.ReadFile(fmt.Sprintf(AppConfigPath, *env))
	if err != nil {
		fmt.Printf("Failed to read application.%s.yml: %s", *env, err)
		os.Exit(ErrExitStatus)
	}

	config := &Config{}
	if err := yaml.Unmarshal(file, config); err != nil {
		fmt.Printf("Failed to read application.%s.yml: %s", *env, err)
		os.Exit(ErrExitStatus)
	}

	return config, *env
}