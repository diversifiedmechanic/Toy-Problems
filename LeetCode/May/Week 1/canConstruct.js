/*
Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:
Input: ransomNote = "aa", magazine = "aab"
Output: true

Constraints:
  You may assume that both strings contain only lowercase letters.
*/

/*
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {

  let store = {};

  for (let char of magazine) {
    if (store[char] === undefined) {
      store[char] = 1;
    } else {
      store[char] += 1;
    }
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (!store[ransomNote[i]]) return false;
    store[ransomNote[i]] -= 1;
  }

  return true;
};

console.log(canConstruct('aa', 'aab') === true);
console.log(canConstruct('aa', 'ab') === false);
console.log(canConstruct('', '') === true);
