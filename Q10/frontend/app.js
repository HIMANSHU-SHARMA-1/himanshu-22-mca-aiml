const API_URL = 'http://localhost:3000/api/products';
const productList = document.getElementById('productList');
const productForm = document.getElementById('productForm');
const msg = document.getElementById('msg');

// Fetch and render products (Client-Side Rendering)
function loadProducts() {
    fetch(API_URL)
        .then(res => res.json())
        .then(products => {
            productList.innerHTML = '';
            products.forEach(p => {
                const card = document.createElement('div');
                card.className = 'product-card';
                card.innerHTML = `
                    <small>ID: ${p.id}</small>
                    <h3>${p.name}</h3>
                    <p>Price: ₹${p.price}</p>
                    <p class="rating">Rating: ${p.rating} ★</p>
                `;
                productList.appendChild(card);
            });
        })
        .catch(() => {
            productList.innerHTML = '<p style="color:red">Failed to load products.</p>';
        });
}

// Add product via form
productForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const rating = document.getElementById('rating').value;

    fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, price, rating })
    })
    .then(res => res.json())
    .then(data => {
        msg.style.color = 'green';
        msg.innerText = data.message;
        productForm.reset();
        loadProducts();
        setTimeout(() => msg.innerText = '', 3000);
    })
    .catch(() => {
        msg.style.color = 'red';
        msg.innerText = 'Error adding product.';
    });
});

loadProducts();
