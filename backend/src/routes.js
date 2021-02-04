const express = require("express")

const CargoController = require('./controllers/CargoController')
const FuncionarioController = require('./controllers/FuncionarioController')

const routes = express.Router()


routes.get("/office", CargoController.index)
routes.post("/office", CargoController.create)

routes.get('/employee', FuncionarioController.index)
routes.post('/employee', FuncionarioController.create)
routes.delete('/employee/:id', FuncionarioController.delete)

module.exports = routes