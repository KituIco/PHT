let age = 18;

// if-else statement
if(age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.")
}

// if - else if - else
let temperature = 25;

if (temperature < 0) {
  console.log("It's freezing.");
} else if (temperature >= 0 && temperature < 20) {
  console.log("It's cool outside.");
} else {
  console.log("It's a warm day.")
}


// switch 
let day = "Monday";

switch (day) {
  case 'Monday':
    console.log("It's the start of the week.");
    break;
  case 'Friday':
    console.log("It's the end of the week.");
    break;
  default:
    console.log("It's a regular day.");
}

// Loops
// for loop
for (let i = 0; i <= 5; i++) {
  console.log("Hello OneCoders", i);
}

// while loop
let count = 1;

while (count <= 5) {
  console.log("Count: ", count);
  count++;
} 


// do-while loop
let j = 6;
do {
  console.log("Do-while count: ", j);
  j++;
} while(j <= 5);