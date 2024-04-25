while (true) {

// 1. Create a prompt for the user to input their date of birth. It should be in this format: MM/DD/YYYY. Store it in a variable 'dateOfBirth".
let birthday = prompt('Please input your Birthday: MM/DD/YYYY');

// 2. Separate the dateOfBirth into three variables, birthMonth, birthDate and birthYear, by splitting it on the '/'. Be sure to parse each variable into integers.
let [birthMonth, birthDate, birthYear] = birthday.split("/").map(Number);


// 5. Checks
if (monthInvalid(birthMonth)) continue;
if (dayInvalid(birthMonth, birthDate)) continue;
if (leapInvalid(birthMonth, birthDate, birthYear)) continue;


// 3. Calculate the age of the user by comparing using the Date() method to generate the current date, and comparing the birthMonth, birthDate and birthYear
let current = (new Date()).toLocaleDateString();
let [currentMonth, currentDate, currentYear] = current.split("/");

const hadCelebrated = ( years ) => {
  if (birthMonth < currentMonth) return years;
  else if (birthMonth == currentMonth && birthDate <= currentDate) return years;
  else return years - 1;
}
let age = hadCelebrated(currentYear - birthYear);


// 4. Output the calculated age into the console.
console.log(`Your age is ${age}`);



// 5. Include the following checkings:
// a. The month should be between 1 and 12 (January to December)
function monthInvalid (month) {
  if (month < 1 || month > 12) {
    console.error("Invalid Month Input");
    return  true;
  }
}

// b. The day should be within the corresponding number of days of each month
function dayInvalid (month, day) {
  let maxDay = [null,31,29,31,30,31,30,31,31,30,31,30,31];
  if (day < 1 || day > maxDay[month]) {
    console.error("Day out of range");
    return true
  }
}

// c. February 29 is a valid date only if the year is a leap year
function leapInvalid (month, day, year) {
  if (month == 2 && day == 29) {
    if ( year%400 != 0 && ( year%100 == 0 || year%4 !=0 )) {
      console.error("Invalid Leap Year Date");
      return true;
    }
  }
}

// d. If it's the user's birthday, also log into the console the message "Happy Birthday!"
if (birthMonth == currentMonth && birthDate == currentDate) {
  console.log("Happy Birthday!");
}

}