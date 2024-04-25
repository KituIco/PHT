// Functions
function greet() {
  console.log("Hello, welcome to the world of functions.");
}


// Arrow function - modern JS
const meet = () => {
  console.log("Hello, welcome to the world of functions!");
}

greet();
meet();


// Ways of writing function
// 1. Function Declaration
function squareDeclation(num) {
  return num * num;
}
// 2. Function Expression
const squareExpression = function (num) {
  return num * num;
}

console.log("Square for Function Declation: ", squareDeclation(6));
console.log("Square for Function Declation: ", squareExpression(5));

// Function Hoisting - works on declaration only
sayHello();

function sayHello() {
  console.log("Hello, function hoisting")
}

// anonymous function
const anonymousFunction =  function () {
  console.log("Hello, anonymous function");
}
anonymousFunction();