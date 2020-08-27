/*
Implement int sqrt(int x).

Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

Example 1:

Input: 4
Output: 2

Example 2:

Input: 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since
             the decimal part is truncated, 2 is returned.
*/

/*
 * @param {number} x
 * @return {number}
 */

var mySqrt = function(x) {
  if (x <= 1) return x;
  let mostRecentSqrt = Math.floor(x / 2);


  while (mostRecentSqrt * mostRecentSqrt > x) {
    if mostRecentSqrt
    mostRecentSqrt -= 1;
  }

  return mostRecentSqrt;
};

console.log(mySqrt(4) === 2);
console.log(mySqrt(9) === 3);
console.log(mySqrt(18) === 4);
console.log(mySqrt(24) === 4);
console.log(mySqrt(35) === 5);
console.log(mySqrt(36) === 6);
console.log(mySqrt(2088437940));
