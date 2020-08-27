/*
Given an input string, reverse the string word by word.

Example 1:
Input: "the sky is blue"
Output: "blue is sky the"

Example 2:
Input: "  hello world!  "
Output: "world! hello"
Explanation: Your reversed string should not contain leading or trailing spaces.

Example 3:
Input: "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

Note:
  A word is defined as a sequence of non-space characters.
  Input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
  You need to reduce multiple spaces between two words to a single space in the reversed string.
*/

/*
* @param {string} s
* @return {string}
*/

var reverseWords = function(s) {
  let reverse = '';
  let currentWord = ' ';

  for (let i = s.length - 1; i >= 0; i--) {

    if (s[i] === ' ' && currentWord !== ' ') {
      reverse += currentWord;
      currentWord = ' ';
    } else if (s[i] !== ' ') {
      currentWord = s[i] + currentWord;
    }
  }

  if (currentWord.length > 1) reverse += currentWord;

  return reverse.trim();
};

////////////// TESTS //////////////

// should work on a normal sentence
console.log(reverseWords('the sky is blue') === 'blue is sky the');

// should only place one space between words
console.log(reverseWords('  hello world!  ') === 'world! hello');

// should reduce multiple spaces to one
console.log(reverseWords('a good    example') === 'example good a');
