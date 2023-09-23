package config

type Config struct {
	Database struct {
		Dialect   string `default:"mysql"`
		Host      string `default:"127.0.0.0"`
		Port      string
		Dbname    string
		Username  string
		Password  string
		Migration bool `default:"false"`
	}
}