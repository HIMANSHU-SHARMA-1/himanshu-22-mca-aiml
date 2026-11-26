const Order = require('../models/order.model')

const createOrder = async(req, res) => {
    try {
        const { items, totalAmount, paymentMethod } = req.body
        if (!items || items.length === 0) {
            return res.status(400).json({ message: "Cart is empty" })
        }

        const order = await Order.create({
            items,
            totalAmount,
            paymentMethod: paymentMethod || "Card",
            paymentStatus: "Success"
        })

        return res.status(201).json({
            success: true,
            message: "Order placed successfully",
            order: order
        })
    } catch(err) {
        return res.status(500).json({
            message: err.message || "Internal server error"
        })
    }
}

const getAllOrders = async(req, res) => {
    try {
        const orders = await Order.find().sort({ createdAt: -1 })
        return res.status(200).json({
            success: true,
            message: "Orders fetched successfully",
            orders: orders
        })
    } catch(err) {
        return res.status(500).json({
            message: err.message || "Internal server error"
        })
    }
}

module.exports = {
    createOrder,
    getAllOrders
}
