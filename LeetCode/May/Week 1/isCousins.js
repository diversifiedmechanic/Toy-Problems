/*
In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

Return true if and only if the nodes corresponding to the values x and y are cousins.

Example 1:
Input: root = [1,2,3,4], x = 4, y = 3
Output: false

Example 2:
Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
Output: true

Example 3:
Input: root = [1,2,3,null,4], x = 2, y = 3
Output: false

Note:

    The number of nodes in the tree will be between 2 and 100.
    Each node has a unique integer value from 1 to 100.

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
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
  // set up stack to hold nodes to be traversed, starting with the root node
  let stack = [[root, 0]];

  // array to hold nodes I'm seeking once they are found
  let foundNodes = [];

  // while there are nodes in the stack
  while (stack.length) {
    // pop the last added node to the stack
    let [node, depth] = stack.pop();

    // if the current node is x or y
    if (node.val === x || node.val === y) {
      // push to found nodes
      foundNodes.push(depth);

      // if found nodes length is 2
      if (foundNodes.length === 2) {
        // if they have the same depth
        if (foundNodes[0] === foundNodes[1]) {
          // return true
          return true;
        } else {
          // return false
          return false;
        }
      }

      // if the last node on the stack has the same depth as the current node
      if (stack.length && stack[stack.length - 1][1] === depth) {
        // pop off two nodes from the stack
        stack.pop();
      // else
      }
    }

    // if there is a left node, add to stack
    if (node.left !== null) stack.push([node.left, depth + 1]);
    // if there is a right node, add to stack
    if (node.right !== null) stack.push([node.right, depth + 1]);
  }

  return false;
};