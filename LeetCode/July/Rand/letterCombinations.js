/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example:
Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

Note:
Although the above answer is in lexicographical order, your answer could be in any order you want.
*/

/*
 * @param {string} digits
 * @return {string[]}
 */

var numToLetters = (num) => {
  switch(num) {
    case '2':
      return 'abc';
    case '3':
      return 'def';
    case '4':
      return 'ghi';
    case '5':
      return 'jkl';
    case '6':
      return 'mno';
    case '7':
      return 'pqrs';
    case '8':
      return 'tuv';
    case '9':
      return 'wxyz';
  }
};

var letterCombinations = function(digits) {

};