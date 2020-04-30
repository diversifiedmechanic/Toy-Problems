/*
In order to win the prize for most cookies sold, my friend Alice and I are going to merge our Girl Scout Cookies orders and enter as one unit.

Each order is represented by an "order id" (an integer).

We have our lists of orders sorted numerically already, in arrays. Write a function to merge our arrays of orders into one sorted array.

For example:

let myArray = [3, 4, 6, 10, 11, 15];
let alicesArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
*/

function mergeArrays(left, right) {
  // indexes to track where I am in the arrays
  let leftIdx = 0;
  let rightIdx = 0;
  let result = [];

  // while not at the end of both arrays
  while (left[leftIdx] !== undefined && right[rightIdx] !== undefined) {
    if (left[leftIdx] && left[leftIdx] <= right[rightIdx]) {
      result.push(left[leftIdx]);
      leftIdx++;
    } else {
      result.push(right[rightIdx]);
      rightIdx++;
    }
  }

  // this was to avoid calling slice on both arrays but I think this is less efficient
  // let remaining = left[leftIdx] ? [left, leftIdx] : [right, rightIdx];
  // return result.concat(remaining[0].slice(remaining[1]));

  // not as pretty but I believe it doesn't add extra time and reduces space
  return result.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
}

let myArray = [3, 4, 6, 10, 11, 15];
let alicesArray = [1, 5, 8, 12, 14, 19];

let results = mergeArrays(myArray, alicesArray);
let expected = [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19];

console.log(results);
console.log(JSON.stringify(results) === JSON.stringify(expected));

myArray = [];
alicesArray = [];
results = mergeArrays(myArray, alicesArray);
console.log(results);



// Tests

let desc = 'both arrays are empty';
let actual = mergeArrays([], []);
expected = [];
assertDeepEqual(actual, expected, desc);

desc = 'first array is empty';
actual = mergeArrays([], [1, 2, 3]);
expected = [1, 2, 3];
assertDeepEqual(actual, expected, desc);

desc = 'second array is empty';
actual = mergeArrays([5, 6, 7], []);
expected = [5, 6, 7];
assertDeepEqual(actual, expected, desc);

desc = 'both arrays have some numbers';
actual = mergeArrays([2, 4, 6], [1, 3, 7]);
expected = [1, 2, 3, 4, 6, 7];
assertDeepEqual(actual, expected, desc);

desc = 'arrays are different lengths';
actual = mergeArrays([2, 4, 6, 8], [1, 7]);
expected = [1, 2, 4, 6, 7, 8];
assertDeepEqual(actual, expected, desc);

function assertDeepEqual(a, b, desc) {
  const aStr = JSON.stringify(a);
  const bStr = JSON.stringify(b);
  if (aStr !== bStr) {
    console.log(`${desc} ... FAIL: ${aStr} != ${bStr}`);
  } else {
    console.log(`${desc} ... PASS`);
  }
}