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

  while (pStack) {
    let pEl = pStack.pop();
    let qEl = qStack.pop();

    console.log(pEl);
    if (pEl.val !== qEl.val) {
      return false;
    }

    if (pEl.left !== null) {
      pStak.push(pEl.left);
      qStak.push(qEl.left);
    }

    if (pEl.right !== null) {
      pStak.push(pEl.right);
      qStak.push(qEl.right);
    }
  }

  return true;
};