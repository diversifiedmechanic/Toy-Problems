/*
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example:
Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.
*/

/*
 * @param {number[][]} grid
 * @return {number}
 */

// should run in O(n*m)
// would be done by 'constructing' a new grid
var minPathSum = function(grid) {
  // construct new grid
  let newGrid = [];
  grid.forEach(row => newGrid.push(Array(grid[0].length)));

  newGrid[0][0] = grid[0][0];

  // go down the columns
  for (let i = 0; i < grid.length; i++) {
    // go down the rows
    for (let j = 0; j < grid[i].length; j++) {
      if (i === 0 && j === 0) continue;
      let topVal = undefined;
      let leftVal = undefined;
      // get the min value of checking up and checking left
      if (newGrid[i - 1]) topVal = grid[i][j] + newGrid[i - 1][j];
      if (newGrid[i][j - 1] !== undefined) leftVal = grid[i][j] + newGrid[i][j - 1];
      // and set that value to the current index
      if(!topVal) topVal = topVal === 0 ? 0 : Infinity;
      if(!leftVal) leftVal = leftVal === 0 ? 0 : Infinity;

      newGrid[i][j] = Math.min(topVal, leftVal);
    }
  }
  console.log(newGrid);

  return newGrid[grid.length - 1][grid[0].length - 1];
};

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]));
