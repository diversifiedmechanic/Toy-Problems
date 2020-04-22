/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:
Input:
11110
11010
11000
00000
Output: 1

Example 2:
Input:
11000
11000
00100
00011
Output: 3
*/

/*
* @param {character[][]} grid
* @return {number}
*/

var changeToWater = function(grid, i, j) {
  // change the current index to water
  grid[i][j] = 0;

  // if up is land
  if (grid[i - 1] && grid[i - 1][j] == 1) {
    // send back through
    changeToWater(grid, i - 1, j);
  }

  // if right is land
  if (grid[i] && grid[i][j + 1] == 1) {
    // send back through
    changeToWater(grid, i, j + 1);
  }

  // if down is land
  if (grid[i + 1] && grid[i + 1][j] == 1) {
    // send back through
    changeToWater(grid, i + 1, j);
  }

  // if left is land
  if (grid[i] && grid[i][j - 1] == 1) {
    // send back through
    changeToWater(grid, i, j - 1);
  }

  // return the grid
  return grid;
}

var numIslands = function(grid) {
  // island count
  let count = 0;

  // traverse the grid
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // if I find land
      if (grid[i][j] == 1) {
        // add one to the count
        count++;
        // set the grid equal to the result of changeToWater
        grid = changeToWater(grid, i, j)
      }
    }
  }

  // return the count
  return count;
};

console.log(numIslands([["1","1","0","0","0"],
["1","1","0","1","0"],
["0","0","1","0","0"],
["0","0","0","1","1"]]));