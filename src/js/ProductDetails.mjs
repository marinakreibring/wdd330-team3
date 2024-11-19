import ProductData from "./ProductData.mjs";
import { setLocalStorage } from "./utils.mjs";

export default class ProductDetails {
    constructor(productId, dataSource) {
      this.productId = productId
      this.product = {}
      this.dataSource = new ProductData("tents")
    }
    async init() {
        // use our datasource to get the details for the current product. findProductById will return a promise! use await or .then() to process it
        this.product = await this.dataSource.findProductById(this.productId)
        // once we have the product details we can render out the HTML
        this.renderProductDetails()
        // once the HTML is rendered we can add a listener to Add to Cart button
        // Notice the .bind(this). Our callback will not work if we don't include that line. Review the readings from this week on 'this' to understand why.
        document.getElementById('addToCart')
        .addEventListener('click', this.addProductToCart.bind(this));
    }

    addProductToCart() {
        setLocalStorage("so-cart", this.product);
    }

    renderProductDetails() {
        const p = this.product
        const detailsHTML = `
        <section class="product-detail">
        <h3>${p.Brand.Name}</h3>

        <h2 class="divider">${p.NameWithoutBrand}</h2>

        <img
          class="divider"
          src="${p.Image}"
          alt="${p.NameWithoutBrand}"
        />

        <p class="product-card__price">${p.FinalPrice}</p>

        <p class="product__color">${p.Colors.ColorName}</p>

        <p class="product__description">${p.DescriptionHtmlSimple}</p>

        <div class="product-detail__add">
          <button id="addToCart" data-id="${p.Id}">Add to Cart</button>
        </div>
      </section>`

      document.querySelector("#details").innerHTML = detailsHTML
    }
  }
  