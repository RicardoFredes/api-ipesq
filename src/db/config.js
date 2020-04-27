module.exports = {
  development: {
    dialect: 'sqlite',
    storage: 'src/db/database.sqlite',
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  }
}