// create an empty array
let course = [];
console.log(course);

// create an array and initializing the variable
let courses  = ["HTML", "CSS", "JavaScript", "React"]; // 1D array
console.log(courses);


// array constructor
let code = new Array(5);
console.log(code);
code [0] = 10;
code [1] = 20;
code [3] = 30;

// array constructor with elements
let colors = new Array("red", "green", "blue");
console.log(colors);

// accessing elements
let newCourses = ["HTML", "CSS", "Javascript", "React", "Express", "VueJS"];
console.log(newCourses[2]);
console.log(newCourses[4]);

// multi-dimensional arrays
let peopleInfo = [
  ["John", "New York", "30"],
  ["Alice", "Los Angeles", "25"]
]
console.log(peopleInfo);
console.log(peopleInfo[0]);
console.log(peopleInfo[0][1]);

// Add element at the beginning
newCourses.shift("Web Dev");
console.log(newCourses);

// remove the last element
let lastElement = newCourses.pop();
console.log(lastElement);
console.log(newCourses);

// remove the first element
let firstElement = newCourses.shift();
console.log(firstElement);
console.log(newCourses);

// iterate using forEach
newCourses.forEach(function myFunction(element) {
  console.log(element);
})

// concatenate
let arr1 = [1, 2, 3];
let arr2 = [4, 5];
let combinedArray = arr1.concat(arr2);
console.log(combinedArray); // Output: [1, 2, 3, 4, 5]

// convert array to string
console.log(newCourses.toString());

// check the type
console.log(typeof newCourses);


// Array Methods
let numbers = [1, 2, 3, 4, 5];

// length
console.log('Array length:', numbers.length);

// indexOf
console.log('Index of 3:', numbers.indexOf(3));

// includes
console.log('Includes 5:', numbers.includes(5));

// join
console.log('Joined array:', numbers.join('-'));

// slice
let slicedArray = numbers.slice(1, 4);
console.log('Sliced array:', slicedArray);

// splice
let removedElements = numbers.splice(2, 2);
console.log('Removed elements:', removedElements);
console.log('Updated array:', numbers);