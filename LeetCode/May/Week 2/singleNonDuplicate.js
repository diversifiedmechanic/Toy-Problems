/*
You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Find this single element that appears only once.

Example 1:
Input: [1,1,2,3,3,4,4,8,8]
Output: 2

Example 2:
Input: [3,3,7,7,10,11,11]
Output: 10

Note: Your solution should run in O(log n) time and O(1) space.
*/

/*
 * @param {number[]} nums
 * @return {number}
 */

var singleNonDuplicate = function(nums) {
  // vars for left idx, right idx
  let leftIdx = 0;
  let rightIdx = nums.length - 1;

  // while right idx is greater then the left idx
  while (rightIdx > leftIdx) {
    // find the middleIdx of left and right idx
    let middleIdx = Math.floor((rightIdx + leftIdx) / 2);

    // var for storing pairs, first is the current idx
    let pairs = [middleIdx];

    let current = nums[middleIdx];
    let left = nums[middleIdx - 1];
    let right = nums[middleIdx + 1];

    // if there the pair is the left
    if (current === left) {
      // add pair idx to pairs
      pairs.unshift(middleIdx - 1);

    // otherwise if the pair is to the right
    } else if (current === right) {
      // add pair idx to pairs
      pairs.push(middleIdx + 1);

    // else
    } else {
      // return value at current idx
      return current;
    }

    // if to the left of the pairs idx is odd
    if ((pairs[0] - leftIdx) % 2 !== 0) {
      // move right idx to the first pair's idx - 1
      rightIdx = pairs[0] - 1;

    // otherwise
    } else {
      // move the left idx to the second pair's idx + 1
      leftIdx = pairs[1] + 1;
    }
  }
  return nums[leftIdx];
};

////////////// Tests ///////////
console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]));
