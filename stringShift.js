/*
You are given a string s containing lowercase English letters, and a matrix shift, where shift[i] = [direction, amount]:
    direction can be 0 (for left shift) or 1 (for right shift).
    amount is the amount by which string s is to be shifted.
    A left shift by 1 means remove the first character of s and append it to the end.
    Similarly, a right shift by 1 means remove the last character of s and add it to the beginning.

Return the final string after all operations.



Example 1:
Input: s = "abc", shift = [[0,1],[1,2]]
Output: "cab"
Explanation:
[0,1] means shift to left by 1. "abc" -> "bca"
[1,2] means shift to right by 2. "bca" -> "cab"

Example 2:
Input: s = "abcdefg", shift = [[1,1],[1,1],[0,2],[1,3]]
Output: "efgabcd"
Explanation:
[1,1] means shift to right by 1. "abcdefg" -> "gabcdef"
[1,1] means shift to right by 1. "gabcdef" -> "fgabcde"
[0,2] means shift to left by 2. "fgabcde" -> "abcdefg"
[1,3] means shift to right by 3. "abcdefg" -> "efgabcd"



Constraints:

    1 <= s.length <= 100
    s only contains lower case English letters.
    1 <= shift.length <= 100
    shift[i].length == 2
    0 <= shift[i][0] <= 1
    0 <= shift[i][1] <= 100
*/

/*
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */

var stringShift = function(s, shift) {
  let pull = 0;
  let push = 0;

  // iterate through the shifts
  for (let i = 0; i < shift.length; i++) {
    // if direction = 0 -> add to pull
    if (shift[i][0] === 0) pull += shift[i][1];
    // if direction = 1, add one to push
    if (shift[i][0] === 1) push += shift[i][1];
  }

  let larger, numOfShifts;
  // decide if push or pull is larger
  // subtract the larger from the smaller to determine the number of shifts
  if (push >= pull)  {
    larger = 'push';
    numOfShifts = push - pull;
  } else {
    larger = 'pull';
    numOfShifts = pull - push;
  }


  while (numOfShifts >= s.length) {
    numOfShifts -= s.length;
  }

  let shiftedString;

  // shift the number of shifts in the right direction by slicing (end is exlusive)
  if (larger === 'push') {
    console.log(s.slice(s.length - numOfShifts), s.slice(0, s.length - numOfShifts))
    shiftedString = s.slice(s.length - numOfShifts).concat(s.slice(0, s.length - numOfShifts));
  } else {
    shiftedString = s.slice(numOfShifts).concat(s.slice(0, numOfShifts));
  }

  // return the shifted string
  return shiftedString;
};


let shifts = [[0, 1], [1, 2]];

console.log(stringShift('abc', shifts));

// let shifts = [[1,4],[0,5],[0,4],[1,1],[1,5]];

// console.log(stringShift('mecsk', shifts));