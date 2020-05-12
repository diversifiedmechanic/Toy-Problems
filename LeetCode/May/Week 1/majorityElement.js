/*
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:
Input: [3,2,3]
Output: 3

Example 2:
Input: [2,2,1,1,1,2,2]
Output: 2
*/

/*
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function(nums) {
  // track numbers that have been used
  let store = {};

  // find what majority would be
  let majority = Math.ceil(nums.length / 2);

  // idx in array
  let i = 0;

  // while still inside the array
  while (i < nums.length) {
    let currentNumber = nums[i];
    // add one to the current number in the number tracker
    if (store[currentNumber] === undefined) {
      store[currentNumber] = 1;
    } else {
      store[currentNumber] += 1;
    }

    // if the count at the current number is greater or equal to what is needed for majority, return the current number
    if (store[currentNumber] >= majority) return currentNumber;

    i += 1;
  }
};

console.log(majorityElement([3,2,3]) === 3);
console.log(majorityElement([2,2,1,1,1,2,2]) === 2);
console.log(majorityElement([6,5,5]));