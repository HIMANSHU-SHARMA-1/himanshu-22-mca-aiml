const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    items: [
        {
            name: { type: String, required: true },
            price: { type: Number, required: true },
            quantity: { type: Number, required: true }
        }
    ],
    totalAmount: { type: Number, required: true },
    paymentMethod: { type: String, default: "Card" },
    paymentStatus: { type: String, default: "Success" }
}, { timestamps: true })

module.exports = mongoose.model('Order', orderSchema)
