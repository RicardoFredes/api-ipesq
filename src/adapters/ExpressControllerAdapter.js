const { serverError } = require('./HttpsStatusCodeAdapter')

class ExpressControllerAdapter {
  request
  response
  status = 200

  constructor(request, response) {
    this.request = request
    this.response = response

  }

  get body() {
    return this.request.body
  }

  get params() {
    return this.request.params
  }

  send(json, status) {
    this.response.status(status || this.status)
    return this.response.json(json)
  }

  sendError({ message, status }) {
    this.setStatus(status)
    return { message }
  }

  setStatus(status) {
    this.status = status
  }

  async exec(methodName) {
    try {
      const input = { ...this.params, ...this.body }
      const result = await this[methodName](input)
      return this.send(result)
    } catch {
      const error = this.sendError(serverError)
      return this.send(error)
    }
  }

  get permalink() {
    return this.request.path
  }
}

module.exports = ExpressControllerAdapter
