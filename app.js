const productList = document.getElementById("product-list");
const cartCount = document.getElementById("cart-count");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const products = [
  { id: 1, name: "Designer Bag", price: 40000, image: "images/beg1.jpg" },
  { id: 2, name: "Classic Dress", price: 28000, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c" },
  { id: 3, name: "Street Hoodie", price: 22000, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f" }
];

function saveCart(){
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartCount(){
  if(!cartCount) return;
  cartCount.innerText = cart.reduce((a,b)=>a+b.qty,0);
}

function addToCart(id){
  const product = products.find(p => p.id === id);

  let item = cart.find(i => i.id === id);

  if(item){
    item.qty++;
  } else {
    cart.push({...product, qty:1});
  }

  saveCart();
  updateCartCount();
}

function renderProducts(){
  productList.innerHTML = "";

  products.forEach(p=>{
    productList.innerHTML += `
      <div class="card">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>₦${p.price}</p>

        <button onclick="addToCart(${p.id})">
          Add to Cart
        </button>
      </div>
    `;
  });
}

renderProducts();
updateCartCount();