// Arrow Function
const greet = () => console.log("Hello, OneCoders");
greet();

const square = (a) => console.log("Square: ", a*a);
square(5);


// Template Literals
let name = "John";
let age = 24;

console.log("Hi! I'm " + name + " and I am " + age + " years old."); // Usual Way
console.log(`Hi! I'm ${name} and I am ${age} years old.`);


// Destructuring
let nums = [24, 23, 13];
console.log( nums[0], nums[1], nums[2]); // Dry Method

let [firstNum, secondNum, thirdNum] = nums;
console.log(`${firstNum}, ${secondNum}, ${thirdNum}`); // Destructure

const numbers = {
  first: 1,
  second: 2,
  third: 3,
}
let {first, second, third} = numbers;
console.log(`First ${first} - Second ${second} - Third ${third}`);


// Spread and Rest ...
// Spread
function sum(x, y, z) {
  return x + y + z;
}
console.log(sum(...nums));
console.log(...nums);

// Rest
function myFunction(firstArg, ...restOfArgs) {
  console.log(firstArg);
  console.log(restOfArgs)
}
myFunction("one","two","three","four");
console.log([12, ...nums]);


// Default Parameters
function multiply(a = 10, b = 5) {
  return a * b;
}
console.log(multiply(9, 5));
console.log(multiply());