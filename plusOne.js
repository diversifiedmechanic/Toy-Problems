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

var plusOne = function(digits) {
  // copy the array
  let arr = [...digits];
  // var to track if there is a carry
  let carry = false;
  // var to keep track of idx
  let idx = 1;

  // while there is a carry
  do {
    let currentIndex = arr.length - idx
    // add one to the current location in array
    let sum = arr[currentIndex] + 1;

    // if the total is more than ten
    if (sum >= 10) {
      // set current location to ones place
      arr[currentIndex] = sum - 10;
      // set carry to true
      carry = true;
    // else
    } else {
      // set current location to total
      arr[currentIndex] = sum
      // set carry to false
      carry = false;
    }

    if (carry === true && currentIndex === 0) {
      arr.unshift(1);
      carry = false;  
    } 

    idx++;

  } while(carry);

  // return array
  return arr;
};

console.log(plusOne([9,9,9]));