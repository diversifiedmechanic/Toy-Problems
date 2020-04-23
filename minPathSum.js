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
  let newGrid = [];
  grid.forEach(row => newGrid.push(Array(grid[0].length)));

  return newGrid;
};

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]));
console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]])[0]);