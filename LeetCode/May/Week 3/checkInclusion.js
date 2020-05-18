/*
Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.

Example 1:
Input: s1 = "ab" s2 = "eidbaooo"
Output: True
Explanation: s2 contains one permutation of s1 ("ba").

Example 2:
Input:s1= "ab" s2 = "eidboaoo"
Output: False

Note:
  The input strings only contain lower case letters.
  The length of both given strings is in range [1, 10,000].
*/

/*
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

var checkInclusion = function(s1, s2) {
  // store s1 in an object

  // iterate through the string
    // if the current letter is in the obj
      // copy the object of letters
      // while the letter exists in the obj
        // subtract one from the letter count
        // if the letter count becomes 0
          // delete the letter from the obj

        // if the object has run out of letters
          // return true
        // increment index by one
      // current letter = index from while loop

  return false;
};