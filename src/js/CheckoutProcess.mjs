import { getLocalStorage } from "./utils.mjs"

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
}