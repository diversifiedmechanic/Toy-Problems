/*
Given the root node of a binary search tree (BST) and a value. You need to find the node in the BST that the node's value equals the given value. Return the subtree rooted with that node. If such node doesn't exist, you should return NULL.

For example,
Given the tree:
        4
       / \
      2   7
     / \
    1   3

And the value to search: 2
You should return this subtree:
      2
     / \
    1   3

In the example above, if we want to search the value 5, since there is no node with value 5, we should return NULL.

Note that an empty tree is represented by NULL, therefore you would see the expected output (serialized tree format) as [], not null.
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  // base case -> current val is val
  if (root.val === val) return root;

  // if the val is greater then the current val
  if (val > root.val) {
    // if there is a value to the right move right
    // otherwise, return an empty tree
    return root.right
    ? searchBST(root.right, val)
    : null;
  // otherwise
  } else {
    // if there is a value to the right move left
    // otherwise, return an empty tree
    return root.left
    ? searchBST(root.left, val)
    : null;
  }
};


////////////// TESTS //////////////
class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
};

var A = new TreeNode(4);
A.left = new TreeNode(2);
A.left.left = new TreeNode(1);
A.left.right = new TreeNode(3);
A.right = new TreeNode(7);

console.log(searchBST(A, 2));
console.log(searchBST(A, 5));