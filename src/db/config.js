module.exports = {
  "development": {
    "dialect": "sqlite",
    "storage": "src/db/database.sqlite",
    "logging": false
  },
  "production": {
    "username": "ybvniujydhmtza",
    "password": "5c90511ee3b73ba939d6120f242d24d850abe80c6124cdedd11e987d43048321",
    "database": "d65gtuupva79a7",
    "host": "ec2-50-17-21-170.compute-1.amazonaws.com",
    "port": 5432,
    "dialect": "postgres",
    "logging": false,
    "dialectOptions": {
      "ssl": true,
      "sslmode": "require",
    }
  }
}
