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
      counts[num] = [1, store.length];
      store.push(num);
    } else {
      counts[num][0] += 1;

      while (
        counts[store[counts[num][1] - 1]]
        && counts[num][0] > counts[store[counts[num][1] - 1]][0]
        && counts[num][0] >= 0
      ) {
        let oldNum = store[counts[num][1] - 1];
        let temp = store[counts[num][1]];

        store[counts[num][1]] = store[counts[num][1] - 1];
        store[counts[num][1] - 1] = temp;

        counts[oldNum][1] += 1;
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

//////////////////////// TESTS //////////////

// should return the top most frequent in an ordered array
console.log(JSON.stringify(topKFrequent([1,1,1,2,2,3], 1)) === JSON.stringify([1]));

// should return the top two most frequent in an ordered array
console.log(JSON.stringify(topKFrequent([1,1,1,2,2,3], 2)) === JSON.stringify([1, 2]));

// should return the most frequent in an array with one element
console.log(JSON.stringify(topKFrequent([1], 1)) === JSON.stringify([1]));

// should return an empty array if no elements in the array
console.log(JSON.stringify(topKFrequent([], 0)) === JSON.stringify([]));

// should return the most frequesnt in an unordered array
console.log(JSON.stringify(topKFrequent([1,2,3,2], 1)) === JSON.stringify([2]));

// // should handle '0's in the input array
console.log(JSON.stringify(topKFrequent([3,0,1,0], 1)) === JSON.stringify([0]));
