const express = require('express')

const app = express()

app.use(express.json())

const productRoutes = require('./routes/product.route')

app.use('/api', productRoutes)

const PORT = 3000

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})