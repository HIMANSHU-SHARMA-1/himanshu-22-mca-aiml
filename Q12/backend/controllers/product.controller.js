const Product = require('../models/product.model')

const createProduct = async(req, res) => {
    try {
        const product = await Product.create(req.body)
        return res.status(201).json({
            success: true,
            message: 'Product Created Successfully',
            product: product
        })
    } catch(err) {
        return res.status(500).json({
            message: err.message || "Internal server error"
        })
    }
}

const getAllProducts = async(req, res) => {
    try {
        const products = await Product.find()
        return res.status(200).json({
            success: true,
            message: "Products fetched successfully",
            products: products
        })
    } catch(err) {
        return res.status(500).json({
            message: err.message || 'Internal server error'
        })
    }
}

const getProductById = async(req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if(!product) {
            return res.status(404).json({
                message: 'Product not found'
            })
        }
        return res.status(200).json({
            success: true,
            message: "Product fetched successfully",
            product: product
        })
    } catch(err) {
        return res.status(500).json({
            message: err.message || 'Internal server error'
        })
    }
}

const updateProductById = async(req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if(!product) {
            return res.status(404).json({
                message: 'Product not found'
            })
        }
        return res.status(200).json({
            success: true,
            message: "Product updated successfully",
            product: product
        })
    } catch(err) {
        return res.status(500).json({
            message: err.message || 'Internal server error'
        })
    }
}

const deleteProductById = async(req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        if(!product) {
            return res.status(404).json({
                message: 'Product not found'
            })
        }
        return res.status(200).json({
            success: true,
            message: "Product deleted successfully"
        })
    } catch(err) {
        return res.status(500).json({
            message: err.message || 'Internal server error'
        })
    }
}

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProductById,
    deleteProductById
}
