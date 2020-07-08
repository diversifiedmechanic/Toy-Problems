/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:
The solution set must not contain duplicate triplets.

Example:
Given array nums = [-1, 0, 1, 2, -1, -4],
A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/

/*
* @param {number[]} nums
* @return {number[][]}
*/

var threeSum = function(nums) {
  let result = [];
  let store = {};

  for (let num in nums) {
    if (store[num] === undefined) {
      store[num] = 1;
    } else {
      store[num] += 1;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let totalOfTwo = nums[i] + nums[j];
      if (store[totalOfTwo * -1] !== undefined) {
        let validFirst = true;
        let validSecond = true;
        if (store[totalOfTwo * -1] === nums[i] && store[nums[i] === 1]) {
          validFirst = false;
        }
        if (store[totalOfTwo * -1] === nums[j] && store[nums[j] === 1]) {
          validSecond = false;
        }
        if (validFirst && validSecond) {
          result.push([nums[i], nums[j], store[totalOfTwo * -1]])
        }
      }
    }
  }

  return result;
};