const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use(Router(express.Router))
app.get('/', (req, res) => res.send('Api Ipesq'))

module.exports = app

function Router(expressRouter) {
  const RouterAdapter = require('./adapters/ExpressRouterAdapter')
  const Controllers = require('./controllers')
  const routes = require('./routes')
  const routerAdapter = new RouterAdapter(expressRouter, Controllers, routes)  
  return routerAdapter.router()
}
