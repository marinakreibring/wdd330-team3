import CheckoutProcess from "./CheckoutProcess.mjs";
import { loadHeaderFooter } from "./utils.mjs";


const checkout = new CheckoutProcess("so-cart", ".order-summary")
checkout.init()

document.querySelector("#checkoutSubmit").addEventListener("click", (e) => {
  e.preventDefault();

  checkout.checkout();
});

loadHeaderFooter()