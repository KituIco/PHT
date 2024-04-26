// create an array 
let randomNumber = [42, 17, 8, 99];
const colors = ["red", "green", "blue", "purple", "yellow"];

// access an element
let myNumber = randomNumber[0];
// console.log(myNumber);

let faveColor = colors[4];
// console.log(faveColor);

// change an element 
colors[3] = "violet";
// console.log(colors);

// colors = [1, 2, 3]; - will return error


// Basic Array Methods
// length
var students = ["Alice", "Bob", "Charlie", "Diana", "Eva"];
let totalStudents = students.length;
// console.log(totalStudents);

// join
// console.log(students.join());
// console.log(students.join(" - "));

// push
students.push("Feliz");
// console.log(students);

students.push("Gelli", "Harry");
// console.log(students);

// pop
students.pop();
// console.log(students);

let poppedStudent = students.pop();
// console.log(`${poppedStudent} left...`, students);

// shift
students.shift();
// console.log(students);

let shiftedStudent = students.shift();
// console.log(shiftedStudent, students);

// unshift
students.unshift("Barbie");
// console.log(students);

students.unshift("Arlan", "Benny");
// console.log(students);


// Other Array Methods
let myColors = ["red", "green", "blue", "purple", "yellow"];

// includes
console.log(myColors.includes("blue"));
console.log(myColors.includes("pink"));

// index of
let faveColorIndex = myColors.indexOf("blue");
console.log(faveColorIndex);

faveColorIndex = myColors.indexOf("pink");
console.log(faveColorIndex);

// sort
myColors.sort();
console.log(myColors);

// issue in sorting numbers
let nums = [99, 1, 25, 234, 100];
nums.sort();
console.log(nums);

// reverse
myColors.reverse();
console.log(myColors);

// concat
let otherColors = ["darkred", "palegreen", "darkblue"];
let combinedColors = myColors.concat(otherColors);
console.log(combinedColors);

let moreColors = ["pink", "brown"]
let allColors = myColors.concat(otherColors, moreColors);
console.log(allColors);

// slice
console.log(allColors.slice(4, 7));
console.log(allColors.slice(4));

console.log("after slice", allColors);

// splice
let removedColors = allColors.splice(4, 3);
console.log(removedColors);

console.log("after splice", allColors);

// splice to insert element onto certain index
allColors.splice(4, 0, "darkcyan", "palemagenta", "palegold");
console.log(allColors);

// splice to insert and to remove elements
allColors.splice(4, 3, "cyan", "magenta", "gold");
console.log(allColors);