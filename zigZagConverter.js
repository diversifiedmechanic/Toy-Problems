/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R

And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);

Example 1:
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"

Example 2:
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
*/

var convert = function(s, numRows) {
  let rows = {};
  if (numRows === 1) return s;

  // create the string 'rows'
  for (let i = 0; i < numRows; i++) {
    // for each row, key = number, val = '';
    rows[i] = '';
  }

  // var to track position in the rows
  let rowPosition = 0;

  // var to track going up start at false
  let isGoingUp = true;

  // iterate through the string
  for (let char of s) {
    // add to rows object
    rows[rowPosition] += char;

    // if going up = false && current row is not the last row
    if (!isGoingUp && rowPosition !== numRows -1) {
      // add one to the row count
      rowPosition++;
    // if going up = true and current row is not the top row
    } else if (isGoingUp && rowPosition !== 0) {
      // subtract one from the row count
      rowPosition--;
    // otherwise
    } else {
      // if going up is false, subtract one from row count, if true, add one to row count, change isGoingUp
      isGoingUp ? rowPosition++ : rowPosition-- ;
      isGoingUp = !isGoingUp;
    }
  }

  // var for result string
  let result = '';
  // combine all the rows
  for (let i = 0; i < numRows; i++) {
    // iterate through the object in sequence, adding to the result string
    result += rows[i];
  }

  // return result string
  return result;
};

console.log(convert("AB", 1) === "AB");


var someFunction = (string, target) => {
  // result string
  let result = '';
  // iterate over the string
  for (let i = 0; i < string.length; i++) {
    // if the string matches the target
    // add to the result string
    
  }
  
  // return result string
  return result;
};