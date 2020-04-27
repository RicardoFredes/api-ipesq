const SequelizeAdapter = require('../adapters/SequelizeAdapter')

class Model extends SequelizeAdapter {
  constructor(tableName, getModelSchema) {
    super()
    this.tableName = tableName
    const modelSchema = getModelSchema(this.Schema)
    this.model = this.database.define(tableName, modelSchema)
  }
}

module.exports = Model
