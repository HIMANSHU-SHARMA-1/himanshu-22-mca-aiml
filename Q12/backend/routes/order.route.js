const Router = require('express').Router()
const { createOrder, getAllOrders } = require('../controllers/order.controller')

Router.get('/orders', getAllOrders)
Router.post('/orders', createOrder)

module.exports = Router
