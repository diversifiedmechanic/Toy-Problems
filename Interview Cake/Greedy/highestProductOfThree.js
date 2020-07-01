/*
Given an array of integers, find the highest product you can get from three of the integers.
The input arrayOfInts will always have at least three integers.
*/

function highestProductOf3(arrayOfInts) {
  let positiveThree = [0, 0, 0];
  let negativeTwo = [0, 0];

  for (let i = 0; i < arrayOfInts.length; i++) {
    if (arrayOfInts[i] >= positiveThree[0]) {
      positiveThree.unshift(arrayOfInts[i]);
    } else if (arrayOfInts[i] >= positiveThree[1]) {
      positiveThree.splice(1, 0, arrayOfInts[i]);
    } else if (arrayOfInts[i] >= positiveThree[2]) {
      positiveThree.splice(2, 0, arrayOfInts[i]);
    }
    if (positiveThree.length > 3) positiveThree.pop();

    if (arrayOfInts[i] < 0) {
      if (arrayOfInts[i] < negativeTwo[0]) {
        negativeTwo.unshift(arrayOfInts[i]);
      } else if (arrayOfInts[i] < negativeTwo[1]) {
        negativeTwo.pop();
        negativeTwo.push(arrayOfInts[i]);
      }
    }
  }

  return Math.max(
    positiveThree[0] * positiveThree[1] * positiveThree[2],
    positiveThree[0] * negativeTwo[0] * negativeTwo[1]);
}
