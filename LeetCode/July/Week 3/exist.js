/*
Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example:
board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.



Constraints:
  board and word consists only of lowercase and uppercase English letters.
  1 <= board.length <= 200
  1 <= board[i].length <= 200
  1 <= word.length <= 10^3
*/

/*
* @param {character[][]} board
* @param {string} word
* @return {boolean}
*/

var traceWord = function(board, word, i, j) {
  if (word.length === 0) return true;

  // up
  if (board[i + 1] && board[i + 1][j] === word[0]) {
    let letter = board[i + 1][j];
    board[i + 1][j] = '';
    if (traceWord(board, word.slice(1), i + 1, j)) {
      return true;
    } else {
      board[i + 1][j] = letter;
    }
  }

  // down
  if (board[i - 1] && board[i - 1][j] === word[0]) {
    let letter = board[i - 1][j];
    board[i - 1][j] = '';
    if (traceWord(board, word.slice(1), i - 1, j)) {
       return true;
    } else {
      board[i - 1][j] = letter;
    }
  }

  // right
  if (board[i][j + 1] === word[0]) {
    let letter = board[i][j + 1];
    board[i][j + 1] = '';
    if (traceWord(board, word.slice(1), i, j + 1)) {
      return true;
    } else {
      board[i][j + 1] = letter;
    }
  }

  // left
  if (board[i][j - 1] === word[0]) {
    let letter = board[i][j - 1];
    board[i][j - 1] = '';
    if (traceWord(board, word.slice(1), i, j - 1)) {
      return true;
    } else {
      board[i][j - 1] = letter;
    }
  }

  return false;
};

var exist = function(board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0]) {
        let letter = board[i][j];
        board[i][j] = '';
        if (traceWord(board, word.slice(1), i, j)) {
          return true;
        } else {
          board[i][j] = letter;
        }
      }
    }
  }

  return false;
};

////////// TESTS /////////////

var board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
];

var word = "ABCCED";
console.log(exist(board, word) === true);

var board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
];

word = "SEE";
console.log(exist(board, word) === true);

var board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
];

word = "ABCB";
console.log(exist(board, word) === false);

board = [
  ["C","A","A"],
  ["A","A","A"],
  ["B","C","D"]
];

word = "AAB";
console.log(exist(board, word) === true);

board = [
  ["A","B","C","E"],
  ["S","F","E","S"],
  ["A","D","E","E"]
];

word = "ABCESEEEFS";
console.log(exist(board,word) === true);