// fizzbuzz function returns string or number
const fizzBuzz = (n) => {

  if ( n%5==0 && n%3==0 )   return "FizzBuzz";
  else if ( n%3==0 )        return "Fizz";
  else if ( n%5==0 )        return "Buzz";
  else                      return n;
  
}

// iterate from 1 to 100
for (let i=1; i<=100; i++) {
  console.log( fizzBuzz(i) );
}