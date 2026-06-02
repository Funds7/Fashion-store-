let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cart-items");
const totalBox = document.getElementById("total");
const checkout = document.getElementById("checkout");

function renderCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.qty;

    cartItems.innerHTML += `
      <div class="cart-item">
        <h3>${item.name}</h3>
        <p>₦${item.price} x ${item.qty}</p>

        <button onclick="removeItem(${item.id})">Remove</button>
      </div>
    `;
  });

  totalBox.innerText = "Total: ₦" + total;

  let message = cart.map(i =>
    `${i.name} x${i.qty}`
  ).join(", ");

  checkout.href = `https://wa.me/2347088100290?text=I want to order: ${message}`;
}

function removeItem(id) {
  cart = cart.filter(item => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

renderCart();
