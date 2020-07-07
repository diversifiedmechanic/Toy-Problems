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

var findEdges = function(i, j, grid = 0) {
  grid[i][j] = '.';

  let count = 4;

  // up
  if (grid[i + 1] && (grid[i + 1][j] === 1 || grid[i + 1][j] === '.')) {
    count -= 1;
  }

  // down
  if (grid[i - 1] && (grid[i - 1][j] === 1 || grid[i - 1][j] === '.')) {
    count -= 1;
  }

  // left
  if (grid[i][j + 1] === 1 || grid[i][j + 1] === '.') {
    count -= 1;
  }

  // right
  if (grid[i][j - 1] === 1 || grid[i][j - 1] === '.') {
    count -= 1;
  }

  // up
  if (grid[i + 1] && grid[i + 1][j] === 1) {
    count += findEdges(i + 1, j, grid);
  }

  // down
  if (grid[i - 1] && grid[i - 1][j] === 1) {
    count += findEdges(i - 1, j, grid);
  }

  // left
  if (grid[i][j + 1] === 1) {
    count += findEdges(i, j + 1, grid);
  }

  // right
  if (grid[i][j - 1] === 1) {
    count += findEdges(i, j - 1, grid);
  }

  // console.log(count, i, j);
  return count;
};

var islandPerimeter = function(grid) {
  let i = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) return findEdges(i, j, grid);
    }
  }
};

////////////// TESTS ////////////////
var cells = [[1]];

// should find all 4 sides of a single island
console.log(islandPerimeter(cells) === 4);

var cells = [[0,1],
             [0,1]];

// should find all 6 sides of a two islands connected
console.log(islandPerimeter(cells) === 6);

var cells = [[1,1],
             [1,1]];

// should find all 8 sides when a 2x2 grid is filled with islands
console.log(islandPerimeter(cells) === 8);

var cells = [[0,1,0],
             [0,1,0],
             [0,1,0]];

// should find all 8 sides of a three islands connected
console.log(islandPerimeter(cells) === 8);

var cells = [[0,1,0],
             [0,1,0],
             [1,1,0]];

// should find all 10 sides of a three islands connected
console.log(islandPerimeter(cells) === 10); // 10


cells = [[0,1,0,0],
         [1,1,1,0],
         [0,1,0,0],
         [1,1,0,0]];

// should handle more complicated shapes
console.log(islandPerimeter(cells) === 16); // 16
