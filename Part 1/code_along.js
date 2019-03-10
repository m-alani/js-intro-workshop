// Traditional Hello World!
console.log('Hello World!');

let firstNumber = 2; // Defined a variable that holds a number
let secondNumber = 16;
let thirdNumber = 7237;
let numbers = [2, 16, 7237]; // Defined an Array of Numbers

// print the second number in the array
console.log(numbers[1]);

let myName = 'Marwan'; // Defined a String
let doYouLikeIceCream = true; // Defined a Boolean

// For loops
for (let i=0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// If Statements
const age = 40;
if (age > 35) {
  console.log('You might be a little bit old');
} else {
  console.log('Are you sure you can legally drink?');
}

// Functions
// Defining a function
let checkAge = function(num) {
  if (num > 35) {
    console.log('You might be a little bit old');
  } else {
    console.log('Are you sure you can legally drink?');
  }
}

// Executing the function! (inside the For Loop)
for (let i=0; i < numbers.length; i++) {
  checkAge(numbers[i]);
}
