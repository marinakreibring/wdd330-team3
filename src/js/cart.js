import { getLocalStorage } from "./utils.mjs";

function addToCart(newItem) {
  // Retrieve existing cart items or initialize an empty array
  let cartItems = getLocalStorage("so-cart") || [];
  // Add the new item to the array
  cartItems.push(newItem);
  // Save the updated array back to localStorage
  setLocalStorage("so-cart", cartItems);
}

function renderCartContents() {
<<<<<<< HEAD
  const cartItems = getLocalStorage("so-cart") || [];
=======
  const cartItems = [];
  cartItems.push(getLocalStorage("so-cart"));
>>>>>>> cc89552e7e56155840968c5789ab2295792cd96e
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
}


function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

renderCartContents();
