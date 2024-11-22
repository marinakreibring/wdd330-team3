import ProductData from './ProductData.js';
import ProductListing from './ProductListing.js';
import { loadHeaderFooter, getParam } from './utils.mjs';

loadHeaderFooter();

const category = getParam('category');
// first create an instance of our ProductData class.
const dataSource = new ProductData();
// then get the element we want the product list to render in
const listElement = document.querySelector('.product-list');
// then create an instance of our ProductListing class and send it the correct information.
const myList = new ProductListing(category, dataSource, listElement);
// finally call the init method to show our products
myList.init();