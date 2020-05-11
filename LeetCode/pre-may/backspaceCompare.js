/*
Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
*/

var removeTags = function (string) {
  let tagCount = 0;
  let newString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    if (tagCount && string[i] !== '#') {
      tagCount--;
      continue;
    } else if (string[i] === '#') {
      tagCount++;
    } else {
      newString = string[i] + newString;
    }
  }

  return newString;
};

var backspaceCompare = function(S, T) {
  if (removeTags(S) === removeTags(T)) return true;
  return false;
};

console.log(backspaceCompare("a#c", "b"))