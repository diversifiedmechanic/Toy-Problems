/*
Given an array of integers, find the highest product you can get from three of the integers.
The input arrayOfInts will always have at least three integers.
*/

function highestProductOf3(arrayOfInts) {
  let positiveThree = [];
  let negativeTwo = [];

  for (let i = 0; i < arrayOfInts.length; i++) {
    if (positiveThree[0] === undefined || arrayOfInts[i] >= positiveThree[0]) {
      positiveThree.unshift(arrayOfInts[i]);
    } else if (positiveThree[1] === undefined || arrayOfInts[i] >= positiveThree[1]) {
      positiveThree.splice(1, 0, arrayOfInts[i]);
    } else if (positiveThree[2] === undefined || arrayOfInts[i] >= positiveThree[2]) {
      positiveThree.splice(2, 0, arrayOfInts[i]);
    }
    if (positiveThree.length > 3) positiveThree.pop();

    if (arrayOfInts[i] < 0) {
      if (negativeTwo[0] === undefined || arrayOfInts[i] < negativeTwo[0]) {
        negativeTwo.unshift(arrayOfInts[i]);
      } else if (negativeTwo[1] === undefined || arrayOfInts[i] < negativeTwo[1]) {
        negativeTwo.splice(1, 0, arrayOfInts[i]);
      }
    }
    if (negativeTwo.length > 2) negativeTwo.pop();
  }

  if (negativeTwo.length === 2) {
    return Math.max(
      positiveThree[0] * positiveThree[1] * positiveThree[2],
      positiveThree[0] * negativeTwo[0] * negativeTwo[1]);
  } else {
    return positiveThree[0] * positiveThree[1] * positiveThree[2];
  }
}

////////////////// TESTS /////////////////

// should multiply the three numbers together if the input only has three numbers
console.log(highestProductOf3([1, 2, 3]) === 6);

// should return a negative number if it is the highest possible
console.log(highestProductOf3([-1, 2, 3]) === -6);

// should return the highest product with arrays larger than 3
console.log(highestProductOf3([-1, 2, 3, 4, 5]) === 60);

// should handle unsorted arrays
console.log(highestProductOf3([-1, 5, 2, 4, 3]) === 60);

// should return the largest product if it includes negatives
console.log(highestProductOf3([3, 2, -5, -4, 1]) === 60);

// should pick the positive number if it is larger than the negatives
console.log(highestProductOf3([-1, -2, 3, 4, 5]) === 60);

// should handle duplicates
console.log(highestProductOf3([-3, -2, -3, 2, 4]) === 36);
