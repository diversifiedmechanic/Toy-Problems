/*
Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

The same repeated number may be chosen from candidates unlimited number of times.

Note:

  All numbers (including target) will be positive integers.
  The solution set must not contain duplicate combinations.

Example 1:

Input: candidates = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]

Example 2:

Input: candidates = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
*/

/*
* @param {number[]} candidates
* @param {number} target
* @return {number[][]}
*/

var combinationSum = function(candidates, target) {
  let result = [];

  let sorted = candidates.sort((a, b) => b - a);

  let buildCombinations = (idx, combination, combinationTotal) => {
    if (combinationTotal === target) return result.push(combination);

    for (let i = idx; i < sorted.length; i++) {
      if (combinationTotal + sorted[i] <= target) {
        buildCombinations(i, combination.concat(sorted[i]), combinationTotal + sorted[i]);
      }
    }
  }

  buildCombinations(0, [], 0)

  return result;
};

/////////////////// TESTS ////////////////////

console.log(JSON.stringify(combinationSum([2,3,6,7], 7)) === JSON.stringify([[7], [3,2,2]]));
console.log(combinationSum([2,3,5], 8));
console.log(JSON.stringify(combinationSum([2,3,5], 8)) === JSON.stringify([[5,3], [3,3,2], [2,2,2,2]]));