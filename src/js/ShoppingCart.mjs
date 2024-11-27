import { getLocalStorage, renderListWithTemplate, setLocalStorage } from "./utils.mjs";

class ShoppingCart{
    constructor (key, parentSelector) {
        this.key = key
        this.parentSelector = document.querySelector(parentSelector)
    }

    cartItemTemplate(item) {
        return `<li class="cart-card divider">
        <a href="#" class="cart-card__image">
          <img
            src="${item.Images.PrimaryMedium}"
            alt="${item.Name}"
          />
        </a>
        <a href="#">
          <h2 class="card__name">${item.Name}</h2>
        </a>
        <p class="cart-card__color">${item.Colors[0].ColorName}</p>
        <p class="cart-card__quantity">qty: 1</p>
        <p class="cart-card__price">$${item.FinalPrice}</p>
        <button class="danger">Remove</button>
      </li>`;
      }

    renderCart() {
        const cartItems = getLocalStorage(this.key)
        if (cartItems && cartItems.length > 0) {
          renderListWithTemplate(this.cartItemTemplate, this.parentSelector, cartItems)
          this.calculateTotalPrice(cartItems)
          this.updateCartCount()
        } else {
          this.parentSelector.textContent = "No cart contents yet."
        }
        
    }

    calculateTotalPrice(items) {
        const cartFooter = document.querySelector(".cart-footer")
        const cartTotal = document.querySelector(".cart-total")
        let total = 0 
        items.forEach(item => {
          total += parseFloat(item.FinalPrice)
        });
        cartTotal.innerHTML += `$${total}`
        cartFooter.classList.remove("hide")
    }

    updateCartCount() {
      const cartItems = getLocalStorage("so-cart") ?? []
      let count = cartItems.length
        const cartCountElement = document.querySelector(".cart-count");
        if (cartCountElement) {
          cartCountElement.textContent = count;
        }
    }
    deleteCartItem(item) {
      const cartItems = getLocalStorage(this.key)
      const filteredItems = cartItems.filter(item => item !== item)
      setLocalStorage("so-cart", filteredItems)
    }
}

export default ShoppingCart;