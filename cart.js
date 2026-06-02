let cart = JSON.parse(localStorage.getItem("cart")) || [];

const box = document.getElementById("cart-items");
const totalBox = document.getElementById("total");
const checkout = document.getElementById("checkout");

function render(){
  let total = 0;
  box.innerHTML = "";

  cart.forEach(i=>{
    total += i.price * i.qty;

    box.innerHTML += `
      <div>
        <h3>${i.name}</h3>
        <p>₦${i.price} x ${i.qty}</p>
        <button onclick="removeItem(${i.id})">Remove</button>
      </div>
    `;
  });

  totalBox.innerText = "Total: ₦" + total;

  let msg = cart.map(i=>`${i.name} x${i.qty}`).join(", ");

  checkout.href =
  `https://wa.me/2347088100290?text=Order: ${msg}`;
}

function removeItem(id){
  cart = cart.filter(i=>i.id!==id);
  localStorage.setItem("cart", JSON.stringify(cart));
  render();
}

render();
