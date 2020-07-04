/*
Write a program to find the n-th ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

Example:
Input: n = 10
Output: 12
Explanation: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.

Note:
  1 is typically treated as an ugly number.
  n does not exceed 1690.
*/

/*
 * @param {number} n
 * @return {number}
 */

var nthUglyNumber = function(n) {
  if (n < 0) return 0;
  // if (n === 1) return 1;

  let uglyNumber = 1;
  let count = 1;

  let ugly = [1, 1, 1];

  while (count <= n) {
    let [twoMult, threeMult, fiveMult] = ugly;

    uglyNumber = Math.min(
      2 * twoMult,
      3 * threeMult,
      5 * fiveMult
    );

    if (2 * twoMult === uglyNumber) {
      ugly[0] += 1;
    }

    if (3 * threeMult === uglyNumber) {
      ugly[1] += 1;
    }

    if (5 * fiveMult === uglyNumber) {
      ugly[2] += 1;
    }

    count += 1;
  }

  return uglyNumber;
};
