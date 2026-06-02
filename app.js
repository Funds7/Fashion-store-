let cart = JSON.parse(localStorage.getItem("cart")) || [];

const productList = document.getElementById("product-list");
const cartCount = document.getElementById("cart-count");

function updateCartCount() {
  cartCount.innerText = cart.reduce((sum, item) => sum + item.qty, 0);
}

function renderProducts(items) {
  productList.innerHTML = "";

  items.forEach(product => {
    productList.innerHTML += `
      <div class="card">
        <img src="${product.image}" />
        <h3>${product.name}</h3>
        <p>₦${product.price}</p>

        <button onclick="addToCart(${product.id})">
          Add to Cart
        </button>
      </div>
    `;
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);

  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({...product, qty: 1});
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

document.getElementById("search").addEventListener("input", e => {
  const value = e.target.value.toLowerCase();

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(value)
  );

  renderProducts(filtered);
});

renderProducts(products);
updateCartCount();
