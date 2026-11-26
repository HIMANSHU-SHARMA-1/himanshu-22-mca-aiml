const Router = require('express').Router()
const {getProducts, createProduct, getProductById,deleteProductById,updateProductById} = require('../controllers/product.controller')

Router.get('/products',getProducts)
Router.post('/products',createProduct)
Router.get('/products/:id',getProductById)
Router.put('/products/:id',updateProductById)
Router.delete('/products/:id',deleteProductById)

module.exports = Router