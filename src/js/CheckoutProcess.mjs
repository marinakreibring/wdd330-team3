import { getLocalStorage } from "./utils.mjs"
import ExternalServices from "./ExternalServices.mjs"

const services = new ExternalServices();

function formDataToJSON(formElement) {
    const formData = new FormData(formElement),
      convertedJSON = {};
  
    formData.forEach(function (value, key) {
      convertedJSON[key] = value;
    });
  
    return convertedJSON;
  }

function packageItems(items) {
    const packagedItems = []
    items.map(item => {
        let packItem = {
            id: `${item.Id}`,
            name: `${item.Name}`,
            price: `${item.FinalPrice}`,
            quantity: 1
        }
        packagedItems.push(packItem)
    }) 
    
    return packagedItems
    
}

export default class CheckoutProcess {
    constructor(key, outputSelector) {
        this.key = key
        this.outputSelector = document.querySelector(outputSelector)
        this.list = []
        this.itemTotal = 0
        this.shipping = 0 
        this.tax = 0.06
        this.orderTotal = 0
    }
    init() {
        this.list = getLocalStorage(this.key)
        this.calculateSubtotal()
        this.calculateTotal()
    }

    calculateSubtotal() {
        this.list.forEach(item => {
            this.itemTotal += item.FinalPrice
        })
    }

    calculateTotal() {
        this.shipping = 10 + (this.list.length -1) * 2  
        this.orderTotal = (this.itemTotal + this.shipping) * this.tax

        this.displayOrderTotals()
    }

    displayOrderTotals() {
        const html = `
        <p><strong>Items in cart:</strong> ${this.list.length}</p>
        <p><strong>Subtotal:</strong> $${this.itemTotal}</p>
        <p><strong>Shipping Estimate:</strong> $${this.shipping}</p>
        <p><strong>Tax:</strong> ${this.tax*100}%</p>
        <p><strong>Total: $${this.orderTotal.toFixed(2)}</strong></p>`

        this.outputSelector.insertAdjacentHTML("beforeend", html)
        // this.outputSelector.innerHTML = html
    }

    async checkout() {
        const formElement = document.forms["checkout"];
    
        const json = formDataToJSON(formElement);
        // add totals, and item details
        json.orderDate = new Date();
        json.orderTotal = this.orderTotal;
        json.tax = this.tax;
        json.shipping = this.shipping;
        json.items = packageItems(this.list);
        console.log(json);
        try {
          const res = await services.checkout(json);
          console.log(res);
        } catch (err) {
          console.log(err);
        }
    }
}