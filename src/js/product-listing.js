import ProductData from './ExternalServices.mjs';
import ProductListing from './ProductListing.mjs';
import { loadHeaderFooter, getParams } from './utils.mjs';

loadHeaderFooter();

const category = getParams('category');
// first create an instance of our ProductData class.
const dataSource = new ProductData();
// then get the element we want the product list to render in
const listElement = document.querySelector('.product-list');
// then create an instance of our ProductListing class and send it the correct information.
const myList = new ProductListing(category, dataSource, listElement);
// finally call the init method to show our products
myList.init();