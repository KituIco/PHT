// add modules from other files
const products = require("./product.js");
const cart = require("./cart.js");
const calculateTotal = require("./order.js");


// add product to the cart
cart.addToCart(products[0]);
cart.addToCart(products[2]);

// display the cart items
console.log("Cart Items: ", cart.getCartItems());

// calculate and display the total order amount
const totalAmount = calculateTotal(cart.getCartItems());
console.log(`Total order amount: $${totalAmount}`)

// cart.addToCart(products[0]);
// console.log(cart.getCartItems());
// cart.addToCart(products[1]);
// console.log(calculateTotal(cart.getCartItems()));