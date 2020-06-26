/*
Find First and Last Position of Element in Sorted Array
Medium

Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
*/

/*
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/

var findRange = (nums, targetValue, targetIdx) => {
  let startIdx = targetIdx;
  let endIdx = targetIdx;

  let range = [];

  while (nums[startIdx] === targetValue) {
    range[0] = startIdx;
    startIdx -= 1;
  }

  while (nums[endIdx] === targetValue) {
    range[1] = endIdx;
    endIdx += 1;
  }

  return range;
}

var searchRange = function(nums, target) {
  let rightIdx = nums.length;
  let leftIdx = 0;

  while (rightIdx - leftIdx >= 0) {
    let middleIdx = Math.floor((rightIdx + leftIdx) / 2);

    if (nums[middleIdx] === target) {
      return findRange(nums, target, middleIdx);
    }

    if (nums[middleIdx] > target) {
      rightIdx = middleIdx - 1;
    } else {
      leftIdx = middleIdx + 1;
    }
  }

  return [-1, -1];
};

/////////////////// TESTS //////////////////////

// should find the range when there is one to find
console.log(JSON.stringify(searchRange([5,7,7,8,8,10], 8)) === JSON.stringify([3,4]));

// should return the same start and end when there is only one element that matches the target
console.log(JSON.stringify(searchRange([5,7,7,8,8,10], 5)) === JSON.stringify([0,0]));

// should return the whole range if there are several matching elements
console.log(JSON.stringify(searchRange([5,7,7,7,7,7,8,8,10], 7)) === JSON.stringify([1,5]));

// should return [-1, -1] when the target is not in the array
console.log(JSON.stringify(searchRange([5,7,7,8,8,10], 6)) === JSON.stringify([-1, -1]));
