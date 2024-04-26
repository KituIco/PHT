# Teaching Demo - Array and Array Methods

Good day, OneCoders! Before we start the class, let me check if everyone's ready. Can you please react with a **Thumbs Up**, if you're good. Okay, seems like everyone here in zoom is ready. Although some students are not present, let me check on them for a bit... Yeah, just notified them on slack. But let's not delay our learning, with that we can now start. 

So from the previous sessions, we have learned about Git, HTML, CSS, and a bit of JS. For today, we will focus on Javascript Arrays and Array Methods. Without further ado, let us open are VS Code and our browser for our live server.

<br/>

## Array Introduction

To start, let us create our *sandbox.html* file and our *arrays.js* file. In our sandbox, let us put the boilerplate and our script targetting the *arrays.js* file. Now, we open this with live server and let us also open our console. With that, we can now proceed to our *arrays.js* file.


#### Overview of an Array

An array in JavaScript is a powerful data structure that allows us to store multiple values **[ may it be numbers, string, objects, and so on everything we have discussed ]** under a single declaration. Think of it as a container that holds related data items—like a drawer with compartments for various things. So how do we represent them in JS.

#### Creating an Array

```
// Creating an array literal
let randomNumbers = [42, 17, 8, 99, 23];
var students = ["Alice", "Bob", "Charlie", "Diana", "Eva"];
const colors = ["red", "green", "blue", "purple", "yellow"];
```

Later we will discuss the difference of using a *const* declaration instead of *let* or *var* declaration. Unlike other data types, we can actually **"modify"** a constant array in some ways. But before that we should focus more on the basics.

Each value within an array is called an element. Elements can be of any data type: numbers, strings, objects, or even other arrays.

#### Accessing an Array

```
// Accessing elements of an array
let currentStudent = students[0]
console.log(currentStudent);

let myNumber = randomNumbers[2];
console.log(myNumber);
```

Arrays are ordered, and you access their elements by referring to an index number. The first element has an index of 0, the second has an index of 1, and so on.


#### Changing Elements of an Array

```
// Changing elements of an array
randomNumbers[0] = 0;
console.log(randomNumbers);

colors[4] = pink;
console.log(colors);
```

Here notice that we were able to kinda modify colors even though it is declared as constant. The reason for this is that we didn't actually change the array itself. Imagine the array as the cabinet in your room. What we changed is the items inside the cabinet but the cabinet itself remains the same, remains constant.

To demonstrate, we can actually get an error for example when we do this.

```
// Changing an array
colors = ["palegreen", "paleblue", "paleyellow"];

randomNumbers = [1,2,3];
console.log(randomNumbers);
```

<br/>

## Basic Array Methods

We now move to **array methods**. Array methods in JavaScript are built-in functions that allow you to manipulate arrays—performing tasks like adding, removing, or transforming elements. Let’s explore some commonly used array methods:

#### Length
```
// length
let totalStudents = students.length;
console.log(totalStudents);
```
Returns the number of elements in an array.

#### Join
```
// join
console.log(students.join());
console.log(students.join(" - "));
```
Joins array elements into a string with a specific separator.

#### Push
```
// push
students.push("Feliz");
console.log(students);

students.push("Gelli", "Harry");
console.log(students);
```
Adds one or more elements to the end of an array.


#### Pop
```
// push
// pop
students.pop();
console.log(students);

let poppedStudent = students.pop();
console.log(`${poppedStudent} left... ${students.join(", ")} remain.`);
```
Removes the last element from an array and returns it.


#### Shift
```
// shift
students.shift();
console.log(students);

let shiftedStudent = students.shift();
console.log(`${shiftedStudent} left...`, students);
```
Removes the first element from an array and returns it.

#### Unshift
```
// unshift
students.unshift("Benny");
console.log(students);

students.unshift("Arlan", "Barbie");
console.log(students);
```
Removes the first element from an array and returns it.


<br/>

## Other Array Methods

We now check **other** array methods that are more complicated. We first comment the previous logs to clear our console.

#### Includes
```
let myColors = ["red", "green", "blue", "purple", "yellow"];

// includes
console.log(myColors.includes("blue"));
console.log(myColors.includes("pink"));
```
Checks if an element is present in an array.

#### Index Of
```
// indexOf
let faveColorIndex = myColors.indexOf("blue");
console.log(faveColorIndex);

faveColorIndex = myColors.indexOf("pink");
console.log(faveColorIndex);
// returns -1
```
Searches an array for an element value and returns its position.

#### Sort
```
// sort
myColors.sort();
console.log(myColors);

// issue in sorting numbers
let nums = [99, 1, 25, 234, 100];
nums.sort();
console.log(nums);

function ascending (a, b) {
  return a - b; // Ascending order
} 
nums.sort(ascending);
console.log(nums);
```
Arranges the elements alphabetically as strings. This can be problematic with numbers

#### Reverse
```
myColors.reverse();
console.log(myColors);
```
...

#### Concat
```
// concat
let otherColors = ["darkred", "palegreen", "darkblue"];
let combinedColors = myColors.concat(otherColors);
console.log(combinedColors);

let moreColors = ["pink", "brown"];
let allColors = myColors.concat(moreColors, otherColors);
console.log(allColors);
```
Creates a new array by merging (concatenating) existing arrays

#### Slice
```
// slice
console.log(allColors.slice(4,7));
console.log(allColors.slice(4));
console.log(allColors.slice(4,5));

console.log(allColors);
```
Selects elements from the start argument, and up to (but not including) the end argument. Does not mutate the original array.

#### Splice
```
// splice
let removedColors = allColors.splice(4,3);
console.log(removedColors, allColors);
```
Removes a number of elements based on the second argument starting from the first argument. Does not mutate the original array. Mutates the original array by either adding or removing elements.

```
// splice to insert elements onto certain index
allColors.splice(4, 0, "darkcyan", "palemagenta", "palegold");
console.log(allColors)

// splice to insert and remove elements 
allColors.splice(4, 3, "cyan", "magenta", "gold");
console.log(allColors)
```
Insert elements starting from a particular position


<br/>

## Modern JS Array Methods

Modern JavaScript refers to the latest practices, features, and tools used in JavaScript development. It encompasses a set of concepts and best practices that make writing JavaScript code more efficient, maintainable, and powerful. It is possible to be not supported by old version of web browsers.

#### To Sorted
```
myColors = ["red", "green", "blue", "purple", "yellow"];

// To Sorted
myColors.toSorted();
console.log(myColors);

let sortedColors = myColors.toSorted();
console.log(sortedColors);
```

#### To Reversed
```
// To Reversed
myColors.toReversed();
console.log(myColors);

let reversedColors = myColors.toReversed();
console.log(reversedColors);
```

#### To Spliced
```
// To Spliced
let splicedColors = myColors.toSpliced(2, 2, "cyan", "pink");
console.log(myColors, splicedColors);
```

#### At
```
// At
console.log(myColors.at(0));
console.log(myColors.at(2));
console.log(myColors.at(-1));
console.log(myColors.at(-2));
```

#### Find