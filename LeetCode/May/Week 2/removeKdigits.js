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
  if (num.length <= k) return '0';

  // var for number that comes before a smaller number
  let larger = 0;

  let findLarger = () => {
    // iterate through the string, starting from where the last largest was found
    for (let i = larger; i < num.length; i++) {
      if (num[i] > num[i + 1]) return i;
    }

    // only one item left?
    return num.length - 1;
  };

  // while numbers can still be removed
  while (k > 0) {
    // find the largest to remove
    larger = findLarger();
    // remove the largest
    num = num.slice(0, larger).concat(num.slice(larger + 1));
    // decriment to make up for the removed number
    larger--;
    k--;
  }

  // remove leading zeros
  let count = 0;
  while (num[count] === '0') {
    count++;
  }
  num = num.slice(count);

  return num || '0';
};

///// Tests ////
console.log(removeKdigits("1432219", 3) === '1219');
console.log(removeKdigits("10200", 1) === '200');
console.log(removeKdigits("10", 2) === '0');
console.log(removeKdigits("100", 2) === '0');
console.log(removeKdigits("1010", 2) === '0');
