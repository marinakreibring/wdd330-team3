import { renderListWithTemplate } from "./utils.mjs"

class ProductListing {
    constructor(category, dataSource, listElement) {
        this.category = category
        this.dataSource = dataSource
        this.listElement = listElement
    }
    async init() {
            const productList = await this.dataSource.getData(this.category)
            this.renderList(productList)
    }

    productCardTemplate(product) {
        return `
        <li class="product-card">
            <a href="/product_pages/index.html?product=${product.Id}">
              <img
                src="${product.Images.PrimaryMedium}"
                alt="${product.Name}"
              />
              <h3 class="card__brand">${product.Brand.Name}</h3>
              <h2 class="card__name">${product.NameWithoutBrand}</h2>
              <p class="product-card__price">$${product.FinalPrice}</p>
            </a>
        </li>`
    }

    renderList(productList) {
        renderListWithTemplate(this.productCardTemplate, this.listElement, productList)
    }
}

export default ProductListing;
