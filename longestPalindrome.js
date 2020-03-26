/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
Examples:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.

Input: "cbbd"
Output: "bb"
*/

var middlePal = function (s, idx) {
  if (s[idx] !== s[idx + 1]) return '';

  let stillPal = true;
  let pal = s[idx] + s[idx + 1];
  let offset = 1;

  while (stillPal) {
    if (s[idx - offset] === s[idx + offset + 1] && s[idx - offset] !== undefined) {
      pal = `${s[idx - offset]}${pal}${s[idx + offset + 1]}`;
      offset++;
    } else {
      stillPal = false;
    }
  }

  return pal;
};

var symPal = function (s, idx) {
  let stillPal = true;
  let pal = s[idx];
  let offset = 1;

  while (stillPal) {
    if (s[idx - offset] === s[idx + offset] && s[idx - offset] !== undefined) {
      pal = `${s[idx - offset]}${pal}${s[idx + offset]}`;
      offset++;
    } else {
      stillPal = false;
    }
  }

  return pal;
};

var longestPalindrome = function(s) {
  let longestPal = '';

  for (let i = 0; i < s.length; i++) {
    let currentPal = '';
    let currentSymPal = symPal(s, i);
    let currentMiddlePal = middlePal(s, i);

    currentMiddlePal.length > currentSymPal.length ? currentPal = currentMiddlePal : currentPal = currentSymPal;

    if (currentPal.length > longestPal.length) longestPal = currentPal;
  }

  return longestPal;
};
