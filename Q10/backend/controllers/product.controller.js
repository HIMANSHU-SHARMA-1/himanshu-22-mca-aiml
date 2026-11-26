let products = [
    { id: 1, name: "Wireless Headphones", price: 2999, rating: 4.5 },
    { id: 2, name: "Mechanical Keyboard", price: 4499, rating: 4.8 },
    { id: 3, name: "Gaming Mouse", price: 1599, rating: 4.2 }
];

const getProducts = (req, res) => {
    res.status(200).json(products);
};

const createProduct = (req, res) => {
    const { name, price, rating } = req.body;

    if (!name || price === undefined || rating === undefined) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const newProduct = {
        id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
        name: name.trim(),
        price: Number(price),
        rating: Number(rating)
    };

    products.push(newProduct);
    res.status(201).json({ message: "Product added successfully", product: newProduct });
};

module.exports = {
    getProducts,
    createProduct
};
