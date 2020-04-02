/*
Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

Example:
Given array nums = [-1, 2, 1, -4], and target = 1.
The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/

var threeSumClosest = function(nums, target) {
  // closest to target
  let closest = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++){
        let sum = nums[i] + nums[j] + nums[k];
        if (Math.abs(sum - target) < Math.abs(closest - target)) closest = sum;
      }
    }
  }

  return closest;
};

test('Handles positive numbers', () => {
  expect(threeSumClosest([1, 2, 1, 4], 3)).toEqual(4);
});

test('Handles negative numbers', () => {
  expect(threeSumClosest([-1, -2, -1, -4], -3)).toEqual(-4);
});

test('Handles mixed numbers', () => {
  expect(threeSumClosest([-1, 2, 1, -4], 2)).toEqual(2);
});

test('Handles a length of 3 array', () => {
  expect(threeSumClosest([0,0,0], 1)).toEqual(0);
});