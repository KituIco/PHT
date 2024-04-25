function greet(name /*parameter*/) {
  console.log("Hello,", name);
}

greet("John" /*argument*/);

// Function with a return value
function sum(a, b) {
  return a + b;
}
console.log("Sum: ", sum(10,10));

// Variable Scopes
let globalVar = "I am global."
console.log(globalVar);


// Function with Local Variable
function localScope() {
  let localVar = "I am local.";
  let globalVar = "New local.";
  console.log(globalVar);
  console.log(localVar);
}
localScope();
// console.log(localVar); - Error


// Higher Order Function
function calculate(num1, num2, operation) {
  return operation(num1, num2);
}
const calc = (num1, num2, operation) => {
  return operation(num1, num2);
}

// Callback Function
function add(a,b) {
  return a + b;
}
const addition = (a,b) => {
  return a + b;
}

function sub(a,b) {
  return a - b;
}
const subtraction = (a,b) => {
  return a - b;
}

// Using higher-order with callback
let resultAdd = calculate(5, 3, add);
let resultAddition = calc(5, 3, addition);
console.log(resultAdd, resultAddition);

let resultSub = calculate(5, 3, sub);
let resultSubtraction = calc(5, 3, subtraction);
console.log(resultSub, resultSubtraction);