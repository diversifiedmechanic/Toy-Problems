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
  let store = {};

  // store s1 in an object
  for (let l of s1) {
    if (store[l] === undefined) {
      store[l] = 1;
    } else {
      store[l] += 1;
    }
  }

  // iterate through the second string
  for (let i = 0; i < s2.length; i++) {
    console.log('in iteraction: ', i, 'store: ', store);
    // if the current letter is in the obj
    if (store[s2[i]]) {
      // copy the object of letters
      let storeCopy = {...store};
      let idx = i;

      // while the letter exists in the obj
      while (storeCopy[s2[idx]] !== undefined) {
        // subtract one from the letter count
        storeCopy[s2[idx]] -= 1;

        // if the letter count becomes 0
        if (storeCopy[s2[idx]] === 0) {
          // delete the letter from the obj
          delete storeCopy[s2[idx]];
        }

        // if the object has run out of letters
        if (!Object.keys(storeCopy).length) {
          // return true
          return true;
        }

        // increment index by one
        idx += 1;
      }

      // current letter = index from while loop
    }
  }

  return false;
};

console.log(checkInclusion('ab', 'eidbaooo'));
console.log(checkInclusion('ab', 'eidboaoo'));
console.log(checkInclusion('adc', 'dcda'));
