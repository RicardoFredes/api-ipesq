const Sequelize = require('sequelize')
const config = require('../db/config')

class SequelizeAdapter {
  database
  model
  Schema

  constructor() {
    this.database = new Sequelize(config.development)
    this.Schema = Sequelize.DataTypes
  }

  async find(id) {
    return this.model.findByPk(id)
  }
  
  async findAll() {
    const result = await this.model.findAll()
    return result
  }

  async create(data) {
    return await this.model.create(data)
  }

  async remove(id) {
    return this.model.destroy({ where: { id } })
  }

  async update(id, data) {
    await this.model.update(data, { where: { id } })
    return this.find(id)
  }

}

module.exports = SequelizeAdapter
