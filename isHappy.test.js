/*
Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example:

Input: 19
Output: true
Explanation:
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1
*/

var isHappy = function(n) {
  let falseCases = [4, 16, 37, 58, 89, 145];

  while (true) {
    let currentTotal = 0;
    while (n > 0) {
      let currentNum = n % 10;
      n = (n - currentNum) / 10;
      currentTotal += currentNum**2;
    }

    n = currentTotal;
    if (falseCases.indexOf(n) !== -1) return false;
    if (n === 1) return true;
    console.log(currentTotal);
  }
};

console.log(isHappy(57));