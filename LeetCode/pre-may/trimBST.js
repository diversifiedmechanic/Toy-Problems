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
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */

// tree helper function -> take in the current tree and the node to be added
  // check to see if there is a tree already
    // if not
      // make a new tree with the value being the passed in node

    // otherwise
      // traverse the tree to find where the current node should be located

  // return the tree

// add to trello -> https://tyk.io/

var trimBST = function(root, L, R) {

  // make and tree var that is initally set to null

  // queue that is empty

  // add to the queue the root node

  // while there are nodes in the queue
    // check to see if the value of the current node is within the range of L and R
      // throw to helper function

    // add the left child if exists add the current node value is not less then or equal to the L value

    // add the right child if exists add the current node value is not less then or equal to the R value

  // return the tree
};

class TreeNode {
  constructor (val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  addLeft(leftValue) {
    this.left = new TreeNode(leftValue);
  }

  addRight(rightValue) {
    this.right = new TreeNode(rightValue);
  }
}
