/*
Write a function that takes an array of characters and reverses the letters in place. ↴

Why an array of characters instead of a string?

The goal of this question is to practice manipulating strings in place. Since we're modifying the input, we need a mutable ↴ type like an array, instead of JavaScript's immutable strings.
*/

function reverse(arrayOfChars) {
  // iterate until we get to the middle
  for (let i = 0; i < arrayOfChars.length / 2; i++) {
    // make a copy of the current value
    let temp = arrayOfChars[i];
    console.log(arrayOfChars[arrayOfChars.length - 1 - i], arrayOfChars[i]);
    // swap with it's counterpart at the end
    arrayOfChars[i] = arrayOfChars[arrayOfChars.length - 1 - i];
    arrayOfChars[arrayOfChars.length - 1 - i] = temp;
  }
};

let testString = ['a', 'g', 'e', 'd'];

reverse(testString);

console.log(testString);