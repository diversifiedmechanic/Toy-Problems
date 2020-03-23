/*
Given a string, find the length of the longest substring without repeating characters.

Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

var lengthOfLongestSubstring = function(s) {
  // longest string length
  let longest = 0;
  // res string
  let buildingString = '';

  // iterate through the input string
  for (let char of s) {
    let charIndex = buildingString.indexOf(char);
    // check if current letter is in the res string
    if (charIndex !== -1) {
      // chop the front of the res string off until that letter
      buildingString = buildingString.slice(charIndex + 1);
    }

    // add current letter to the res string
    buildingString += char;

    // check to see if res string is longer then longest
     if (buildingString.length > longest) longest = buildingString.length;
  }

  // return longest
  return longest;
};

console.log(lengthOfLongestSubstring('abcadfgh'));