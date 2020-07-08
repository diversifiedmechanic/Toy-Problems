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
  let resultSet = new Set();
  let store = {};

  for (let num of nums) {
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
        if (nums[i] === nums[j] && store[nums[i]] === 2) break;

        let validFirst = true;
        let validSecond = true;

        if ((totalOfTwo * -1) === nums[i] && store[nums[i]] === 1) {
          validFirst = false;
        }
        if ((totalOfTwo * -1) === nums[j] && store[nums[j]] === 1) {
          validSecond = false;
        }
        if (validFirst && validSecond) {
          resultSet.add(JSON.stringify([nums[i], nums[j], totalOfTwo * -1].sort()));
        }
      }
    }
  }

  let result = [];

  for (let [set] of resultSet.entries()) {
    result.push(JSON.parse(set));
  }

  return result;
};

////////// TESTS //////////////

var nums = [-1, 0, 1, 2, -1, -4];
var expected = [
  [-1, 0, 1],
  [-1, -1, 2]
];
// should solve the example
console.log(JSON.stringify(threeSum(nums)));


var nums = [0,0,0];
var expected = [0,0,0];
// should return zeros if they are all there
console.log(JSON.stringify(threeSum(nums)));

var nums = [0,0];
var expected = [];
// should return return an empty array if no matches
console.log(JSON.stringify(threeSum(nums)));
