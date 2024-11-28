import CheckoutProcess from "./CheckoutProcess.mjs";
import { loadHeaderFooter } from "./utils.mjs";


const checkout = new CheckoutProcess("so-cart", ".order-summary")

checkout.init()

loadHeaderFooter()