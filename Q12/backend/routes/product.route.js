const Router = require('express').Router()
const {
    getAllProducts,
    createProduct,
    getProductById,
    updateProductById,
    deleteProductById
} = require('../controllers/product.controller')

Router.get('/products', getAllProducts)
Router.post('/products', createProduct)
Router.get('/products/:id', getProductById)
Router.put('/products/:id', updateProductById)
Router.delete('/products/:id', deleteProductById)

module.exports = Router
