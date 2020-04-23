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

// not a viable solution
// should run in O(n*m)
// would be done by 'constructing' a new grid
var minPathSum = function(grid) {
  // min sum
  let minSum = Infinity;

  // recursive function that will go through all the paths
  let traverseAllPaths = (i = 0, j = 0, currentSum = grid[0][0]) => {

    if (i === grid.length - 1 && j === grid[0].length - 1) {
      if (currentSum < minSum) minSum = currentSum;
      return;
    }

    // if the current sum is larger then the min sum, return
    if (currentSum >= minSum) return;

    // if it exists, traverse right
    if (grid[i][j + 1] !== undefined) {
      // add the current value to the currentSum
      currentSum += grid[i][j + 1];
      // send back through, adding one to j
      traverseAllPaths(i, j + 1, currentSum)
      currentSum -= grid[i][j + 1];
    }

    // if it exists, traverse down
    if (grid[i + 1] !== undefined) {
      // add the current value to the currentSum
      currentSum += grid[i + 1][j];
      // send back through, adding one to i
      traverseAllPaths(i + 1, j, currentSum)
    }
  };

  // call the function
  traverseAllPaths();

  // return the min sum
  return minSum;
};

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]));