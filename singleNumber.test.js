/// LEET CODE CHALLENGE -> DAY 1 ///
// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:
// Input: [2,2,1]
// Output: 1

// Example 2:
// Input: [4,1,2,1,2]
// Output: 4

var singleNumber = function(nums) {
  let store = {};

  // iterate over the input array
  for (let num of nums) {
    // if the current element exists in the store
    store[num] !== undefined
    // delete it from the object
    ? delete store[num]
    // otherwise add the current element to the object
    : store[num] = true;
  }

  // get the one element out of the store and return
  for (let [key] of Object.entries(store)) {
    // return single number
    return Number(key);
  }
};

test('handles short arrays', () => {
  expect(singleNumber([2,2,1])).toBe(1);
});

test('handles longer arrays', () => {
  expect(singleNumber([2,2,1,1,3,4,3,4,6,7,9,7,9])).toBe(6);
});