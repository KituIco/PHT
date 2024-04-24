// Arrays
// creating an array
let fruits = ["apple", "banana", "orange", "mango"];
console.log(fruits);

// accessing array elements
console.log("First fruit: ", fruits[0]);
console.log("Last fruit: ", fruits[fruits.length - 1]);

// modifying elements
fruits[0] = "grape";
console.log(fruits);

// push adds and element at the end
fruits.push("strawberry");
console.log(fruits);

// pop() - remove the last element
fruits.pop();
console.log(fruits);

// Array iteration
for (let i = 0; i < fruits.length ; i++) {
  console.log("Fruits: ", fruits[i]);
}

// forEach 
let colors = ["red", "blue", "green", "white"];
colors.forEach( function (color) {
  console.log("Color: ", color);
})
colors.forEach( (color) => {
  console.log("Color: ", color);
})

// Array Methods
let numbers = [1,2,3,4,5];

// indexOf
console.log("Index of 3: ", numbers.indexOf(3));
console.log("Index of green: ", colors.indexOf("green"));

// includes
console.log("Includes number 5: ", numbers.includes(5));
console.log("Includes number 5: ", colors.includes(5));

let sentence = "This is a long sentence.";
console.log("Includes long: ", sentence.includes("long"));

// join
console.log(numbers.join(" "))

// slice
let slicedArray = numbers.slice(1,4);
console.log("Sliced Array",slicedArray);

// splice
let removedElements = numbers.splice(2,2);
console.log("Removed Items",removedElements);
console.log("Updated Array",numbers);

