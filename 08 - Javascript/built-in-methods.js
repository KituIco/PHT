// Strings 
// .split
let message = "Hello, OneCoders!";
let words = message.split(', ');
console.log(words);

// .includes 
let sentence = "The quick brown fox jumps over the lazy dog.";
let containsWord = sentence.includes("fox");
console.log(containsWord)

// .length
let sampleStr = "Welcome, John!";
let strLength = sampleStr.length;
console.log(strLength);


// MATH
let num = [20, 11, 30, 40]

let maxNumber = Math.max(...num);
console.log(maxNumber);

let minNumber = Math.min(...num);
console.log(minNumber);

let randomValue = Math.random();
console.log(randomValue) // random number in [0,1)

let floorNum = Math.floor(3.89);
console.log(floorNum);

let ceilNum = Math.ceil(3.29);
console.log(ceilNum);

let roundedVal = Math.round(3.29);
console.log(roundedVal);

// nesting math methods
let randomNumber = Math.round(Math.random()*10);
console.log(randomNumber)

const getRandomInt = (a, b) => {
  return Math.floor( Math.random() * (Math.max(a,b) - Math.min(a,b) + 1) + Math.min(a,b) );
}
console.log(getRandomInt(15,12));


// Other built-in methods
// toFixed()
const fixedNumber = (3.1415893829).toFixed(2)
console.log(fixedNumber)

const currentDate = new Date();
console.log(currentDate);

const otherDate = new Date("Apr 24, 1964");
console.log(otherDate);

console.log(currentDate.getFullYear() - otherDate.getFullYear());
console.log(currentDate.getMonth() - otherDate.getMonth());