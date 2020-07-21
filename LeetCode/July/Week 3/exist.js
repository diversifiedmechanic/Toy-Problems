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

var copyBoard = function(board) {
  let c;
  board.forEach(row => c.push([...row]));
  return c;
};

var traceWord = function(board, word, i, j) {
  if (word.length === 0) return true;

  // up
  if (board[i + 1] && board[i][j] === word[0]) {
    board[i + 1][j] = '';
    return traceWord(board, word.slice(1), i + 1, j);
  }

  // down
  if (board[i - 1] && board[i][j] === word[0]) {
    board[i - 1][j] = '';
    return traceWord(board, word.slice(1), i - 1, j);
  }

  // right
  if (board[i][j + 1] === word[0]) {
    board[i][j + 1] = '';
    return traceWord(board, word.slice(1), i, j + 1);
  }

  // left
  if (board[i][j - 1] === word[0]) {
    board[i][j - 1] = '';
    return traceWord(board, word.slice(1), i, j - 1);
  }

  return false;
};

var exist = function(board, word) {
  let wordFound = false;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0]) {
        let copy = copyBoard(board);
        copy[i][j] = '';
        wordFound = traceWord(copy, word.slice(1), i, j);
      }
    }
  }

  return wordFound;
};