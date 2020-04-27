class ExpressRouterAdapter {
  expressRouter
  Controllers
  routes

  constructor(ExpressRouter, Controllers, routes) {
    this.expressRouter = ExpressRouter()
    this.Controllers = Controllers
    this.routes = routes
  }

  add(method, path, controller) {
    const [ controllerName, methodName ] = controller.split('@')
    if (!controllerName ) throw new Error('Invalid controller defined')
    const Controller = this.Controllers[controllerName]
    if (!Controller) throw new Error(`Invalid method ${methodName} of the ${controllerName}`)
    this.expressRouter[method](path, (req, res) => new Controller(req, res).exec(methodName))
    return this
  }

  get(path, controller) {
    return this.add('get', path, controller)
  }

  delete(path, controller) {
    return this.add('delete', path, controller)
  }

  post(path, controller) {
    return this.add('post', path, controller)
  }

  put(path, controller) {
    return this.add('put', path, controller)
  }

  router() { 
    return this.routes(this).expressRouter
  }
}

module.exports = ExpressRouterAdapter
