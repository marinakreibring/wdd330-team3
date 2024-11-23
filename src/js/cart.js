import ShoppingCart from "./ShoppingCart.mjs";
import { getLocalStorage } from "./utils.mjs";
import { loadHeaderFooter } from "./utils.mjs";

// function renderCartContents() {
//   const cartItems = getLocalStorage("so-cart")
//   const htmlItems = cartItems.map((item) => cartItemTemplate(item));
//   document.querySelector(".product-list").innerHTML = htmlItems.join("");
//   calculateTotalPrice(cartItems)
// }

// function cartItemTemplate(item) {
//   const newItem = `<li class="cart-card divider">
//   <a href="#" class="cart-card__image">
//     <img
//       src="${item.Image}"
//       alt="${item.Name}"
//     />
//   </a>
//   <a href="#">
//     <h2 class="card__name">${item.Name}</h2>
//   </a>
//   <p class="cart-card__color">${item.Colors[0].ColorName}</p>
//   <p class="cart-card__quantity">qty: 1</p>
//   <p class="cart-card__price">$${item.FinalPrice}</p>
//   <button class="danger">Remove</button>
// </li>`;

//   return newItem;
// }

// function calculateTotalPrice(items) {
//   const cartFooter = document.querySelector(".cart-footer")
//   const cartTotal = document.querySelector(".cart-total")
//   let total = 0 
//   items.forEach(item => {
//     total += parseFloat(item.FinalPrice)
//   });
//   cartTotal.innerHTML += `$${total}`
//   cartFooter.classList.remove("hide")
// }

// renderCartContents();


<<<<<<< HEAD
function updateCartCount(count) {
  const cartCountElement = document.querySelector('.cart-count');
  if (cartCountElement) {
    cartCountElement.textContent = count;
  }
}
updateCartCount(cartItems)
=======
// function updateCartCount(count) {
//   const cartCountElement = document.querySelector(".cart-count");
//   if (cartCountElement) {
//     cartCountElement.textContent = count;
//   }
// }
// updateCartCount(cartItems)

loadHeaderFooter()

const cart = new ShoppingCart("so-cart", ".product-list")
cart.renderCart()
>>>>>>> 5c8cdf7d5bad0ed40d9f7c13913bed98ca4e8fd7
