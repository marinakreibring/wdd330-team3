import { formatNumberToUSD, setLocalStorage, getLocalStorage, renderListWithTemplate } from "./utils.mjs";

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
        <p class="cart-card__quantity">qty: ${item.Quantity}</p>
        <p class="cart-card__price">$${item.FinalPrice}</p>
        <button class="danger">Remove</button>
      </li>`;
      }

    renderCart() {
        const cartData = getLocalStorage(this.key)
        if (cartData && cartData.length > 0) {
          const cartItems = this.processCartList(cartData)
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
        const cartCheckoutButton = document.querySelector(".cart-checkout-button")
        let total = 0 
        items.forEach(item => {
          total += parseFloat(item.FinalPrice * item.Quantity)
        });
        cartTotal.innerHTML += `${formatNumberToUSD(total)}`
        cartFooter.classList.remove("hide")
        cartCheckoutButton.classList.remove("hide")
    }

    updateCartCount() {
      const cartItems = getLocalStorage("so-cart") ?? []
      let count = 0
      cartItems.forEach(item => {
        count += item.Quantity
      })
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

    processCartList(list) {
      let map = new Map();
      // Iterate through the array and count occurrences
      list.forEach(item => {
        let key = JSON.stringify(item); // Convert the object to a string key for the map
        if (map.has(key)) {
          let existing = map.get(key);
          existing.Quantity += 1; // Increment the quantity if the object already exists
        } else {
          map.set(key, { ...item, Quantity: 1 }); // Add the object with a quantity of 1
        }
      });
      // Convert the map values back to an array
      let uniqueArray = Array.from(map.values());
      return uniqueArray;
    }
}

export default ShoppingCart;