/*
Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7

return its bottom-up level order traversal as:

[
  [15,7],
  [9,20],
  [3]
]
*/

/*
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/*
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (!root) return [];
  let result = [];

  let stack = [[root, 0]];

  while (stack.length) {
    let [node, depth] = stack.pop();

    result[depth] === undefined
    ? result[depth] = [node.val]
    : result[depth].push(node.val);

    if (node.right !== null) stack.push([node.right, depth + 1]);
    if (node.left !== null) stack.push([node.left, depth + 1]);
  }

  return result.reverse();
};

//////////////// TESTS //////////////////

class TreeNode {
  constructor(val, left, right) {
    this.val = val || null;
    this.left = left || null;
    this.right = right || null;
  }
}

let A = new TreeNode(3);
A.left = new TreeNode(9);
A.right = new TreeNode(20);
A.right.left = new TreeNode(15);
A.right.right = new TreeNode(7);

console.log(levelOrderBottom(A));

console.log(JSON.stringify(levelOrderBottom(A)) === JSON.stringify([
  [15,7],
  [9,20],
  [3]
]));
