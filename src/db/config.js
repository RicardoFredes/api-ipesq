module.exports = {
  "development": {
    "dialect": "sqlite",
    "storage": "src/db/database.sqlite",
    "logging": false
  },
  "production": {
    "username": "ipesq_amesul",
    "password": "brasil123",
    "database": "ipesq1",
    "host": "db4free.net",
    "port": 3306,
    "dialect": "mysql",
    "logging": false
  }
}
