/*
Implement pow(x, n), which calculates x raised to the power n (xn).

Example 1:
Input: 2.00000, 10
Output: 1024.00000

Example 2:
Input: 2.10000, 3
Output: 9.26100

Example 3:
Input: 2.00000, -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25

Note:
  -100.0 < x < 100.0
  n is a 32-bit signed integer, within the range [−231, 231 − 1]
*/

/*
* @param {number} x
* @param {number} n
* @return {number}
*/

var myPow = function(x, n) {
  let result = 1;

  if (n === 0) {
    return 1;
  } else if (x === 1 || x === -1){
    return x < 0 && n < 0 ? Math.abs(x) : x;
  } else if (n > 0) {

    while (n > 0) {
      result *= x;
      n -= 1;
    }

  } else {

    while (n < 0) {
      result *= x;
      n += 1;
    }

    result = 1 / result;
  }

  return Number(result.toFixed(5));
};

////////////// TESTS /////////////

// should handle positive whole numbers
console.log(myPow(2.00000, 10) === 1024);

// should handle positive decimals
console.log(myPow(2.10000, 3) === 9.261);

// should handle negative exponents
console.log(myPow(2.00000, -2) === 0.25);

console.log(myPow(-1.00000, 2147483647));
