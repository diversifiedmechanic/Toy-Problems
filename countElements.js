/*
Given an integer array arr, count element x such that x + 1 is also in arr.
If there're duplicates in arr, count them seperately.

Example 1:
Input: arr = [1,2,3]
Output: 2
Explanation: 1 and 2 are counted cause 2 and 3 are in arr.

Example 2:
Input: arr = [1,1,3,3,5,5,7,7]
Output: 0
Explanation: No numbers are counted, cause there's no 2, 4, 6, or 8 in arr.

Example 3:
Input: arr = [1,3,2,3,5,0]
Output: 3
Explanation: 0, 1 and 2 are counted cause 1, 2 and 3 are in arr.

Example 4:
Input: arr = [1,1,2,2]
Output: 2
Explanation: Two 1s are counted cause 2 is in arr.

Constraints:

    1 <= arr.length <= 1000
    0 <= arr[i] <= 1000
*/

/*
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
  // initialize a var to 0
  let count = 0;
  let store = {};

  // iterate through the array
  arr.forEach((num) => {
    // store each num as the key and the number of times it shows up as the value
    if (store[num] === undefined) {
      store[num] = 1;
    } else {
      store[num] += 1;
    }
  });

  // loop through the object
  for (let [key, value] of Object.entries(store)) {
    // convert to num
    let objNum = Number(key) + 1;
    // check to see if there is num + 1 in the object
    if (store[objNum] !== undefined) {
      // add the value to the counter
      count += value;
    }
  }

  return count;
};