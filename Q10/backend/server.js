const express = require('express');
const path = require('path');
const productRoutes = require('./routes/product.route');

const app = express();
const PORT = 3000;

app.use(express.json());

// Enable CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    if (req.method === 'OPTIONS') return res.sendStatus(200);
    next();
});

// Serve frontend files
app.use(express.static(path.join(__dirname, '../frontend')));

app.use('/api', productRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
