const productList = document.getElementById("product-list");

const products = [
  {
    id: 1,
    name: "Designer Bag",
    price: 40000,
    image: "images/beg1.jpg"
  },
  {
    id: 2,
    name: "Classic Dress",
    price: 28000,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c"
  },
  {
    id: 3,
    name: "Street Hoodie",
    price: 22000,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"
  }
];

function renderProducts(){
  if(!productList) return;

  productList.innerHTML = "";

  products.forEach(p=>{
    productList.innerHTML += `
      <div class="card">
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <div class="price">₦${p.price}</div>
      </div>
    `;
  });
}

renderProducts();