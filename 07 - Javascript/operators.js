// JS Operators and how to use them in expressions
// Arithmetic Operators
let a = 10;
let b = 5;

// Addition : +
a = a + b;
console.log(a);

// compound assignment operator
a += b;
console.log(a);

// Subtraction : -
a = a - b;
a -= b;
console.log(a);

// Multiplication : a = a * b;
a *= b;
console.log(a);

// Division : a = a / b;

a /= b;
console.log(a);

// Modulo : a = a % b;
a %= b;
console.log(a); 

// String Concatenation
console.log("Hello" + " " + "World" + " " + a);


// Comparison Operators
let x = 10;
let y = 5;

console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);
console.log(50 == "50"); // true, loose equality
console.log(x != y);
console.log(50 === "50"); // true, strict equality
console.log(x !== y);

// Logical Operators
let sunny = true;
let warm = false;

console.log("Sunny and Warm?", warm && sunny);
console.log("Sunny or Warm?", warm || sunny);
console.log("Not Sunny?", !sunny);

// Unary Operators - (--)decrement, (++)increment
let num = 1;
// num + 1
num++;
console.log(num);
num--;
console.log(num);

// Ternary Operators
let activeStatus = false;
let member = activeStatus ? "Registered" : "Not Registered";

// typeof operator
console.log(typeof activeStatus);
console.log(typeof member);

// Function Call Expressions
function greeting() {
  console.log("Hey there!");
}
greeting();


