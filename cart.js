let cart = JSON.parse(localStorage.getItem("cart")) || [];

const box = document.getElementById("cart-items");
const totalBox = document.getElementById("total");
const checkout = document.getElementById("checkout");

function save(){
  localStorage.setItem("cart", JSON.stringify(cart));
}

function renderCart(){
  box.innerHTML = "";
  let total = 0;

  cart.forEach(item=>{
    total += item.price * item.qty;

    box.innerHTML += `
      <div class="card">
        <h3>${item.name}</h3>
        <p>₦${item.price} x ${item.qty}</p>

        <button onclick="removeItem(${item.id})">Remove</button>
        <button onclick="increase(${item.id})">+</button>
        <button onclick="decrease(${item.id})">-</button>
      </div>
    `;
  });

  totalBox.innerText = "Total: ₦" + total;

  let msg = cart.map(i=>`${i.name} x${i.qty}`).join(", ");

  checkout.href =
  `https://wa.me/2347088100290?text=Order: ${msg}`;
}

function removeItem(id){
  cart = cart.filter(i => i.id !== id);
  save();
  renderCart();
}

function increase(id){
  let item = cart.find(i => i.id === id);
  item.qty++;
  save();
  renderCart();
}

function decrease(id){
  let item = cart.find(i => i.id === id);

  if(item.qty > 1){
    item.qty--;
  } else {
    cart = cart.filter(i => i.id !== id);
  }

  save();
  renderCart();
}

renderCart();