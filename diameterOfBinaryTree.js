/*
Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

Example:
Given a binary tree

    1
   / \
  2   3
 / \
4   5

Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

Note: The length of path between two nodes is represented by the number of edges between them.
*/

/*
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 * @param {TreeNode} root
 * @return {number}
 */

var diameterOfBinaryTree = function(root) {
  let largest = 0;

  // recursive function
  let traverseTree = (node) => {
    if (node.left === null && node.right === null) {
      return 1;
    }

    let left = node.left ? traverseTree(node.left) : 0;
    let right = node.right ? traverseTree(node.right) : 0;

    let currentMaxDiameter = left + right;

    if (currentMaxDiameter > largest) largest = currentMaxDiameter;

    return left >= right ? left + 1 : right + 1;
  }

  traverseTree(root);

  return largest;
};