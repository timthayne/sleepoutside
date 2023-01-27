import { getLocalStorage, setLocalStorage } from './utils.mjs';
import ProductData from './ProductData.mjs';

const dataSource = new ProductData('tents');

function addProductToCart(product) {
  let products = getLocalStorage('so-cart');
  
  // check to see if products exist
  if (products) {
    products.push(product);
    
  } else {
    products = [product];
  }

  // add product array to local storage
  setLocalStorage('so-cart', products); 
}

// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById('addToCart')
  .addEventListener('click', addToCartHandler);
