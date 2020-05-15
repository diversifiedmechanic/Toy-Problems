/*
Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible.

Note:
  The length of num is less than 10002 and will be ≥ k.
  The given num does not contain any leading zero.

Example 1:
Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.

Example 2:
Input: num = "10200", k = 1
Output: "200"
Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.

Example 3:
Input: num = "10", k = 2
Output: "0"
Explanation: Remove all the digits from the number and it is left with nothing which is 0.
*/

/*
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  // if the length is less then or equal to k return zero
  if (num.length <= k) return '0';

  // convert the num string to actual number
  // let number = Number(num);

  // while k is greater then zero
  while (k > 0) {
    // variable for index removed, resulting in lowest number
    // let lowestNu
    let lowestVal =  Number(num);

    // iterate through the string, backwards
    for (let i = 0; i < num.length; i++) {
      // convert the sliced out value
      let current = Number(num.slice(0, i).concat(num.slice(i + 1)));

      // if the current number is lower, replace it
      if (current < lowestVal) lowestVal = current;
    }

    // set num equal to the num to string
    num = lowestVal.toString();
    // subtract one from k
    k--;
  }

  // return num
  return num;
};

///// Tests ////
console.log(removeKdigits("1432219", 3));
console.log(removeKdigits("10200", 1));
console.log(removeKdigits("10", 2));
