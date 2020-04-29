/*
Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.

Return the quotient after dividing dividend by divisor.

The integer division should truncate toward zero, which means losing its fractional part. For example, truncate(8.345) = 8 and truncate(-2.7335) = -2.

Example 1:
Input: dividend = 10, divisor = 3
Output: 3

Example 2:
Input: dividend = 7, divisor = -3
Output: -2

Note:
    Both dividend and divisor will be 32-bit signed integers.
    The divisor will never be 0.
    Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose of this problem, assume that your function returns 2^31 − 1 when the division result overflows.
*/

// needs to use bit-wise
var divide = function(dividend, divisor) {
  let resultIsNegative = false;

  if (dividend < 0) {
    dividend *= -1;
    resultIsNegative = !resultIsNegative;
  }
  if (divisor < 0) {
    divisor *= -1;
    resultIsNegative = !resultIsNegative;
  }

  let result = 0;

  while (dividend >= divisor) {
    dividend = dividend - divisor;
    result++;
  }

  result = Math.floor(result);

  if (resultIsNegative === true) result *= -1;

  if (result > 2147483647) result = 2147483647;
  if (result < -2147483648) result = -2147483648;

  return result;
};

console.log(divide(-2147483648, 2));