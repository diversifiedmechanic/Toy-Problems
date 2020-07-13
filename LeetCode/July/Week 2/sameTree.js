/*
Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

Example 1:

Input:     1         1
          / \       / \
         2   3     2   3
        [1,2,3],   [1,2,3]
Output: true

Example 2:
Input:     1         1
          /           \
         2             2
        [1,2],     [1,null,2]
Output: false

Example 3:
Input:     1         1
          / \       / \
         2   1     1   2
        [1,2,1],   [1,1,2]
Output: false
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

var isSameTree = function(p, q) {
  let pStack = [p];
  let qStack = [q];

  while (pStack.length) {
    let pEl = pStack.pop();
    let qEl = qStack.pop();

    if (qEl === null || pEl === null || pEl.val !== qEl.val) {
      if (qEl === null && pEl === null) continue;
      return false;
    }

    if (pEl.left !== null || qEl.left !== null) {
      pStack.push(pEl.left);
      qStack.push(qEl.left);
    }

    if (pEl.right !== null || qEl.right !== null) {
      pStack.push(pEl.right);
      qStack.push(qEl.right);
    }
  }

  return true;
};
