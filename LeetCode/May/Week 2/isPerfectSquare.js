/*
Given a positive integer num, write a function which returns True if num is a perfect square else False.

Note: Do not use any built-in library function such as sqrt.

Example 1:

Input: 16
Output: true

Example 2:

Input: 14
Output: false

*/

/*
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  // define the number starting at 0
  let number = 0;

  // while true
  while (true) {
    // if the number times itself is the number, return the number
    if (number * number === num) return true;

    // if it is greater then the number, return false
    if (number * number > num) return false;

    // add one to the number
    number++;
  }
};

console.log(isPerfectSquare(25))