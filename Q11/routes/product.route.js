const Router = require('express').Router()
const {getAllProducts, createProduct, getProductbyId,deleteProductById,updateProductById} = require('../controllers/product.controller')

Router.get('/product',getAllProducts)
Router.post('/product',createProduct)
Router.get('/product/:id',getProductbyId)
Router.put('/product/:id',updateProductById)
Router.delete('/product/:id',deleteProductById)

module.exports = Router

