/*
Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.

Example:
Input:  [1,2,1,3,2,5]
Output: [3,5]

Note:
    The order of the result is not important. So in the above example, [5, 3] is also correct.
*/

/*
* @param {number[]} nums
* @return {number[]}
*/

var singleNumber = function(nums) {
  let set = new Set();

  nums.forEach((num) => {
    if (set.has(num)) {
      set.delete(num);
    } else {
      set.add(num);
    }
  });

  return Array.from(set);
};

