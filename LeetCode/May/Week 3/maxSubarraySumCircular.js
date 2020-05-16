/*
Given a circular array C of integers represented by A, find the maximum possible sum of a non-empty subarray of C.

Here, a circular array means the end of the array connects to the beginning of the array.  (Formally, C[i] = A[i] when 0 <= i < A.length, and C[i+A.length] = C[i] when i >= 0.)

Also, a subarray may only include each element of the fixed buffer A at most once.  (Formally, for a subarray C[i], C[i+1], ..., C[j], there does not exist i <= k1, k2 <= j with k1 % A.length = k2 % A.length.)


Example 1:
Input: [1,-2,3,-2]
Output: 3
Explanation: Subarray [3] has maximum sum 3

Example 2:
Input: [5,-3,5]
Output: 10
Explanation: Subarray [5,5] has maximum sum 5 + 5 = 10

Example 3:
Input: [3,-1,2,-1]
Output: 4
Explanation: Subarray [2,-1,3] has maximum sum 2 + (-1) + 3 = 4

Example 4:
Input: [3,-2,2,-3]
Output: 3
Explanation: Subarray [3] and [3,-2,2] both have maximum sum 3

Example 5:
Input: [-2,-3,-1]
Output: -1
Explanation: Subarray [-1] has maximum sum -1

Note:

  -30000 <= A[i] <= 30000
  1 <= A.length <= 30000
*/

/*
 * @param {number[]} A
 * @return {number}
 */

var maxSubarraySumCircular = function(A) {
  // the max sum so far
  let max = -Infinity;
  // current sum
  let currentSum = 0;
  // restart point
  let restartPoint = 0;

  // function -> takes in when to stop iterating
  let iterate = (arr) => {
    // iterate through the array
    for (let i = 0; i < arr.length; i++) {
      // add value to the current sum
      currentSum += arr[i];

      if(!restartPoint && (currentSum < max)) {

        // set to current index
        restartPoint = i;
      }

      // if the current sum is greater then max sum
      if (currentSum > max) {
        // replace
        max = currentSum;
      }

      // if the current sum is less then 0
      if (currentSum < 0) {
        // set to zero
        currentSum = 0;
        // if the restart point has not be set
        restartPoint = i;
      }


    }
  }

  // call function to go through whole array
  iterate( A);

  // console.log('max: ', max, 'currentSum: ', currentSum, 'restartPoint: ', restartPoint);

  currentSum = 0;

  // call function to go until the stopping point
  array = A.slice(restartPoint + 1).concat(A.slice(0, restartPoint + 1));
  // console.log(array);
  iterate(array);

  // return the max sum
  return max;
};

console.log(maxSubarraySumCircular([1,-2,3,-2]) === 3);

// console.log('return value: ', maxSubarraySumCircular([5,-3,5]));
console.log(maxSubarraySumCircular([5,-3,5]) === 10);
console.log(maxSubarraySumCircular([3,-1,2,-1]) === 4);
console.log(maxSubarraySumCircular([3,-2,2,-3]) === 3);
console.log(maxSubarraySumCircular([-2,-3,-1]) === -1);
