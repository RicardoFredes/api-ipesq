const Controller = require('./Controller')
const UsersModel = require('../models/UsersModel')
const { notFound, invalidProvides, serverError } = require('../resources/errors')

class UsersController extends Controller {
  db
  
  constructor(req, res) {
    super(req, res)
    this.db = new UsersModel()
  }

  async show({ id }) {
    const user = await this.db.find(id)
    if (!user) return this.sendError(notFound)
    return this.parsedUser(user)
  }
  
  async list() {
    const users = await this.db.findAll()
    return users.map(user => this.parsedUser(user))
  }

  async save({ name, email, phoneNumber, role = 'OPERATOR' }) {
    const data = { name, email, phoneNumber, role }
    if (!this.validate(data)) return this.sendError(invalidProvides)
    const user = await this.db.create(data)
    if (!user) this.sendError(serverError)
    this.setStatus(201)
    return this.parsedUser(user)
  }

  async remove({ id }) {
    const parsedId = Number(id)
    if (!parsedId) return this.sendError(invalidProvides)
    const deleted = await this.db.remove(parsedId)
    if (!deleted) return this.sendError(notFound)
    this.setStatus(202)
    return { message: 'User deleted with success' }
  }

  async update({ id, ...data }) {
    if (!this.validate(data)) return this.sendError(invalidProvides)
    const user = await this.db.update(id, data)
    if (!user) return this.sendError(notFound)
    this.setStatus(202)
    return this.parsedUser(user)
  }

  validate({ email, name }) {
    let errors = []
    if (!name) errors.push('name')
    if (!email) errors.push('email')
    return errors.length === 0
  }

  parsedUser({ id, name, email, phoneNumber, role }) {
    return { id, name, email, phoneNumber, role }
  }
}

module.exports = UsersController
