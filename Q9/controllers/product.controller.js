let products = [
    {
        id: 1,
        name: "Laptop",
        price: 50000,
        description: "HP Laptop"
    },
    {
        id: 2,
        name: "Mobile",
        price: 20000,
        description: "Samsung Mobile"
    }
]
const createProduct = (req,res)=>{
        try{
            const product = {
            id: products.length + 1,
            name:req.body.name,
            price:req.body.price,
            description:req.body.description
        }

        products.push(product)

        return res.status(201).json({
            message: "Product created successfully",
        })
        }catch(err){
            return res.status(500).json({
                message: "Internal server error"
            })
        }
}

const getProducts = (req,res)=>{
    return res.status(200).json({
        message: "Products fetched successfully",
        products: products
    })
}

const getProductById = (req,res)=>{
    const id = Number(req.params.id)
    const product = products.find(product => product.id === id)

    if(!product){
        return res.status(404).json({
            message: "Product not found"
        })
    }

    return res.status(200).json({
        message: "Product fetched successfully",
        product: product
    })
}

const deleteProductById = (req,res)=>{
    const id = Number(req.params.id)
    const index = products.findIndex(product => product.id === id)

    if(index === -1){
        return res.status(404).json({
            message:'Product not found'
        })
    }
    // products.pop(products.id)
    products.splice(index,1)

    return res.status(200).json({
        message: "Product deleted successfully"
    })
}

const updateProductById = (req,res)=>{
    const id = Number(req.params.id)
    const product = products.find(product => product.id === id)

    
    if(!product){
        return res.status(404).json({
            message: "Product not found"
        })
    }
    
    product.name = req.body.name,
    product.price = req.body.price,
    product.description = req.body.description

    return res.status(200).json({
        message: "Product updated successfully",
        product: product
    })
}

module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProductById,
    deleteProductById
}