/*
You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

Example:
Input:
[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

Output: 16
/*

/*
* @param {number[][]} grid
* @return {number}
*/

var findEdges = function(i, j, grid) {
  grid[i][j] = 0;
  let count = 4;

  // up
  if (grid[i + 1] && grid[i + 1][j] === 1) {
    count -= 1;
    findEdges(i + 1, j, grid);
  }

  // down
  if (grid[i - 1] && grid[i - 1][j] === 1) {
    count -= 1;
    findEdges(i - 1, j, grid);
  }

  // left
  if (grid[i][j + 1] === 1) {
    count -= 1;
    findEdges(i, j + 1, grid);
  }

  // right
  if (grid[i][j - 1] === 1) {
    count -= 1;
    findEdges(i, j - 1, grid);
  }
};

var islandPerimeter = function(grid) {
  let islandFound = false;
  let i = 0;

  while (!islandFound) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) return findEdges(i, j, grid);
    }

    i += 1;
  }
};