import CheckoutProcess from "./CheckoutProcess.mjs";
import { loadHeaderFooter } from "./utils.mjs";

const checkout = new CheckoutProcess("so-cart", ".order-summary")
checkout.init()

document.querySelector("#checkoutSubmit")?.addEventListener("click", (e) => {
  e.preventDefault();

  const form = document.forms[0]
  const formStatus = form.checkValidity()
  form.reportValidity()

  if (formStatus) {
    checkout.checkout();
  }
});

loadHeaderFooter()