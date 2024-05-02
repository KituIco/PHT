let cartItems = [];

// add to cart
const addToCart = (product) => {
  cartItems.push(product);
}

// get cart items
const getCartItems = () => {
  return cartItems;
}

module.exports = { addToCart, getCartItems };