/*
Given a non-empty array of integers, return the k most frequent elements.

Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]

Note:

  You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
  Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
  It's guaranteed that the answer is unique, in other words the set of the top k frequent elements is unique.
  You can return the answer in any order.
*/

/*
* @param {number[]} nums
* @param {number} k
* @return {number[]}
*/

var topKFrequent = function(nums, k) {
  let store = [];
  let counts = {};

  nums.forEach((num) => {
    if (counts[num] === undefined) {
      counts[num] = [1, store.length - 1];
      store.push(num);
    } else {
      counts[num][0] += 1;

      while (counts[num][0] < counts[store[counts[num][1] - 1]][0] && newNumLocation > 0) {
        let temp = store[counts[num][1]];

        store[counts[num][1]] = store[counts[num][1] - 1];

        store[counts[num][1] - 1] = temp;

        counts[store[counts[num][1] - 1]][0] += 1;
        counts[num][1] -= 1;
      }
    }
  });

  let result = [];

  for (let i = 0; i < k; i++) {
    result.push(store[i]);
  }

  return result;
};