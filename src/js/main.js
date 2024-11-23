
import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductListing.mjs";
import Alert from "./alerts.mjs";
import { loadHeaderFooter } from "./utils.mjs";

const dataSource = new ProductData("tents");
const listElement = document.querySelector(".product-list");

const list = new ProductListing("tents", dataSource, listElement);
list.init();

// Fetch the alert data from the alerts.json file
fetch("./alerts.json")
    .then(response => response.json())
    .then(data => {
        // Create an instance of Alert and generate the alerts
        const alert = new Alert(data);
        alert.createAlert();
    })
    .catch(error => {
        console.error("Error fetching alerts:", error);
    });

loadHeaderFooter()
