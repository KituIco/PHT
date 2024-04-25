// function that returns true only if the argument is an even number
const isEven = (num) => {
  if( num%2 == 0 ) return true;
  else return false;
}

// iterating from 0 to 10 while checking if the number is even
for (let i=0; i<=10; i++) {
  console.log(i, isEven(i));
}



// function that returns the product of two numbers
const multiply = (x,y) => {
  return x * y;
}

// loop that prompts user to input two numbers
while (true) {
  let a = parseInt(prompt("Input the first number: "));
  let b = parseInt(prompt("Input the second number: "));

  // ends the loop if one number is negative 
  if (a<0 || b<0) {
    break;
  }

  // display the product of two inputs
  console.log(multiply(a,b));
}



// functions that prints the reverse of a string
const reverseString = (str) => {
  let reversed = "";
  for (let letter of str) {
    reversed = letter + reversed;
  }
  return reversed;
}

console.log( reverseString("abcdef") );
console.log( reverseString("john123") );
console.log( reverseString("example") );