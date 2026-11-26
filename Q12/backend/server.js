const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const productRoutes = require('./routes/product.route')
const orderRoutes = require('./routes/order.route')

const app = express()
const PORT = 3000

app.use(express.json())

// CORS middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Content-Type")
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
    if (req.method === 'OPTIONS') return res.sendStatus(200)
    next()
})

// Serve static frontend files
app.use(express.static(path.join(__dirname, '../frontend')))

app.use('/api', productRoutes)
app.use('/api', orderRoutes)

mongoose.connect('mongodb://127.0.0.1:27017/Q12').then(() => {
    console.log('Successfully connected to MongoDB')
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
}).catch(err => {
    console.error('MongoDB connection error:', err)
})
