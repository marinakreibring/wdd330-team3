import {renderListWihTemplate} from "./utils.mjs";

function productCardTemplate(product) {
    return `<li class="product-card">
        <a href="product_pages/index.html?product=${product.Id}">
            <img src="${product.Image}" alt="Image of ${product.Name}"/>
            <h3 class="card__brand">${product.Brand.Name}</h3>
            <h2 class="card__name">${product.Name}</h2>
            <p class="product-card__price">$${product.FinalPrice}</p>
        </a>
    </li>`
}

export default class ProductListing {
    constructor(category, dataSource, listElement) {
        // according to step 4 /3 / 1-3
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }
    // step 4 /3 /4
    async init() {      
        const productList = await this.dataSource.getData();
        this.renderList (productList)
    }
    // render after doing the first stretch
    renderList(list) {
        renderListWihTemplate(productCardTemplate, this.listElement, list);
    }
}
