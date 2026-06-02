let cart = [];

const buttons = document.querySelectorAll(".add-cart");
const cartCount = document.getElementById("cart-count");

buttons.forEach(button => {
  button.addEventListener("click", () => {

    cart.push({
      name: button.dataset.name,
      price: button.dataset.price
    });

    cartCount.textContent = cart.length;
  });
});
