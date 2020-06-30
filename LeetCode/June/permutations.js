/*
Given a collection of distinct integers, return all possible permutations.

Example:
Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/

/*
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function(nums) {
  const result = [];

  const build = (numbers, perm) => {
    // base
    if (perm.length ==== nums.length) {
      return result.push(perm);
    }

    for (let i = 0; i < numbers.length; i++) {
      build(numbers.slice(0, i).concat(numbers.slice(i + 1)), perm.concat(numbers[i]));
    }
  }

  build(nums, []);

  return result;
};