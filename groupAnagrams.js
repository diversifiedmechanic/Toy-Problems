/*
Given an array of strings, group anagrams together.

Example:
Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]

Note:

    All inputs will be in lowercase.
    The order of your output does not matter.

*/

var groupAnagrams = function(strs) {
  let result = [[strs[0]]];
  let sortedWords = [strs[0].split('').sort().join('')];

  // iterate through the input array
  for (let j = 1; j < strs.length; j++) {
    let addedToSub = false;
    let currentWord = strs[j].split('').sort().join('');
    let i = 0;

    // compare to words already in result array, only checking the first index
    while (!addedToSub && i < result.length) {

      if (currentWord === sortedWords[i]) {
        result[i].push(strs[j]);
        addedToSub = true;
      }

      i++;
    }

    // if no words are found in the result array that match the current word
    if (!addedToSub) {
      // push into result array
      result.push([strs[j]]);
      sortedWords.push(strs[j].split('').sort().join(''));
    }
  }

  return result;
};

