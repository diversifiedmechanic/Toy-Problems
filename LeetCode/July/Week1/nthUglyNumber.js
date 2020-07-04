/*
Write a program to find the n-th ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

Example:
Input: n = 10
Output: 12
Explanation: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.

Note:
  1 is typically treated as an ugly number.
  n does not exceed 1690.
*/

/*
 * @param {number} n
 * @return {number}
 */

var nthUglyNumber = function(n) {
  if (n <= 0) return 0;


  let ugly = [0, 0, 0];

  let uglyNumbers = [1];
  let count = 1;

  while (count < n) {
    let [twos, threes, fives] = ugly;

    uglyNumbers[count] = Math.min(
      uglyNumbers[twos] * 2,
      uglyNumbers[threes] * 3,
      uglyNumbers[fives] * 5,
    );


    if (uglyNumbers[count] === uglyNumbers[twos] * 2) {
      ugly[0] += 1;
    }

    if (uglyNumbers[count] === uglyNumbers[threes] * 3) {
      ugly[1] += 1;
    }

    if (uglyNumbers[count] === uglyNumbers[fives] * 5) {
      ugly[2] += 1;
    }

    count += 1;
    // console.log('uglyNumber: ', uglyNumber, 'count: ', count);
  }

  return uglyNumbers[uglyNumbers.length - 1];
};

///////////// TESTS /////////////

// should work on the example
console.log(nthUglyNumber(10) === 12);

// should return 0 with 0
console.log(nthUglyNumber(0) === 0);

// should return 1 with 1
console.log(nthUglyNumber(1) === 1);
// console.log(nthUglyNumber(0));

// should return zero with a negative number
console.log(nthUglyNumber(-2) === 0);

// should work with larger numbers
console.log(nthUglyNumber(100) === 1536);

// should be able to handle the largest number passed in
console.log(nthUglyNumber(1690) === 2123366400);
