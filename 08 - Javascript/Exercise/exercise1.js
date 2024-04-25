// Task 1: Use arrow functions to calculate the square of a given number and log the result to the console.
const squareNum = (num) => num * num;
console.log(squareNum(5));
console.log(squareNum(10));
console.log(squareNum(15));


// Task 2: Use template literals to create a welcome message that includes the name and age of a person.
let name = "John";
let age = "70";
console.log(`Welcome, ${name}! You are ${age} years old.`);


// Task 3: Use destructuring to extract the first and last name from a person object and log them to the console.
let person = {
  firstName: "Emily",
  lastName: "Doe",
}
let {firstName, lastName} = person
console.log(`First Name: ${firstName}`);
console.log(`Last Name: ${lastName}`);


// Task 4: Use the spread operator to merge two arrays into a single array.
let firstArray = ["My", "First", "Array"];
let secondArray = [1, 20, 23, 124];
let mixedArray = [...firstArray, ...secondArray];
console.log(mixedArray);


// Task 5: Use default parameters to create a function that calculates the area of a rectangle.
const areaRectangle = (width = 20, length = 10) => width * length;
console.log(areaRectangle());
console.log(areaRectangle(15));
console.log(areaRectangle(7,20));


// Task 6: Create an object called "Person" with properties for name and age, and a method to introduce the person. Instantiate the object and call the introduce method.
person = {
  name: "Darwin",
  age: "23",
  introduce: () => console.log(`This is ${person.name}, ${person.age} y/o.`)
}
person.introduce()
