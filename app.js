let cart = JSON.parse(localStorage.getItem("cart")) || [];

const grid = document.getElementById("product-grid");
const cartCount = document.getElementById("cart-count");
const drawer = document.getElementById("cart-drawer");

function saveCart(){
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartCount(){
  cartCount.innerText = cart.reduce((a,b)=>a+b.qty,0);
}

function renderProducts(list){
  grid.innerHTML = "";

  list.forEach(p=>{
    grid.innerHTML += `
      <div class="card">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>₦${p.price}</p>

        <button onclick="add(${p.id})">Add to Cart</button>
        <button onclick="view(${p.id})">View</button>
      </div>
    `;
  });
}

function add(id){
  const p = products.find(x=>x.id===id);

  let item = cart.find(i=>i.id===id);

  if(item){
    item.qty++;
  } else {
    cart.push({...p, qty:1});
  }

  saveCart();
  updateCartCount();
  renderDrawer();
}

function view(id){
  localStorage.setItem("selected", id);
  window.location.href = "product.html";
}

function renderDrawer(){
  drawer.innerHTML = "<h3>Your Cart</h3>";

  cart.forEach(i=>{
    drawer.innerHTML += `
      <p>${i.name} x${i.qty}</p>
    `;
  });
}

document.getElementById("search").addEventListener("input",(e)=>{
  let v = e.target.value.toLowerCase();

  let filtered = products.filter(p=>
    p.name.toLowerCase().includes(v)
  );

  renderProducts(filtered);
});

renderProducts(products);
updateCartCount();
