/*
Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:
Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.

Example 2:
Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
*/

/*
* @param {number[]} digits
* @return {number[]}
*/

var plusOne = function(digits) {
  let carry = true;

  for (let i = digits.length - 1; i >= 0; i--) {
    if (carry) digits[i] += 1;

    if (digits[i] > 9) {
      digits[i] = 0;
    } else {
      carry = false;
      break;
    }
  }

  if (carry) digits.unshift(1);

  return digits;
};

///////////////////// TESTS ///////////////

// should add one to an array of one digit
console.log(JSON.stringify(plusOne([1])) === JSON.stringify([2]));

// should add one to zero
console.log(JSON.stringify(plusOne([0])) === JSON.stringify([1]));

// should add one to an array with no carry over
console.log(JSON.stringify(plusOne([1,2,3])) === JSON.stringify([1,2,4]));

// should be able to carry over
console.log(JSON.stringify(plusOne([1,2,9])) === JSON.stringify([1,3,0]));

// should be able to add to the front of the array if needed
console.log(JSON.stringify(plusOne([9,9,9])) === JSON.stringify([1,0,0,0]));
