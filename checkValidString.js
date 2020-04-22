/*
Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

Any low parenthesis '(' must have a corresponding high parenthesis ')'.
Any high parenthesis ')' must have a corresponding low parenthesis '('.
Left parenthesis '(' must go before the corresponding high parenthesis ')'.
'*' could be treated as a single high parenthesis ')' or a single low parenthesis '(' or an empty string.
An empty string is also valid.

Example 1:
Input: "()"
Output: True

Example 2:
Input: "(*)"
Output: True

Example 3:
Input: "(*))"
Output: True

Note:
The string size will be in the range [1, 100].
*/

/*
 * @param {string} s
 * @return {boolean}
 */

var checkValidString = function(s) {
  let low = 0,
    high = 0;

  for (let char of s) {
    char === '(' ? low++ : low--;
    char !== ')' ? high++ : high--;
    if (high < 0) break;
    low = Math.max(low, 0);
  }

  return low === 0;
};

console.log(checkValidString('))'));