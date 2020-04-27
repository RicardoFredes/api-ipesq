const express = require('express')
const app = express()

app.use(express.json())
app.use(Router(express.Router))

module.exports = app

function Router(expressRouter) {
  const RouterAdapter = require('./adapters/ExpressRouterAdapter')
  const Controllers = require('./controllers')
  const routes = require('./routes')
  const routerAdapter = new RouterAdapter(expressRouter, Controllers, routes)  
  return routerAdapter.router()
}