/*
Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

Note:
You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

Example 1:
Input: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
Output: 1

Example 2:
Input: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
Output: 3

Follow up:
What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?
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
 * @param {number} k
 * @return {number}
 */

var kthSmallest = function(root, k) {
  // create an array for counting
  let counting = [];

  // stack for traversing through the tree, initiating with the root
  let stack = [root];

  // traverse through the tree
  while (stack.length) {
    // capture the value, left and right of the current node
    let {left, right, val} = stack.pop();

    // var to track sign
    let isNegative = val < 0 ? true : false;

    // if the counting array at the current value is undefined
    if (counting[Math.abs(val)] === undefined) {
      // add a tuple w/ zeros
      counting[Math.abs(val)] = [0,0];
    }

    // if the current number is negative
    if (isNegative) {
      // add one to the left side
      counting[Math.abs(val)][0] += 1;

    // otherwise
    } else {
      // add one to the right side
      counting[val][1] += 1;
    }

    // if there is a right, add to stack
    if (right) stack.push(right);
    // if there is a left, add to stack
    if (left) stack.push(left);
  }

  // start from the end of the array
  for (let i = counting.length - 1; i >= 0; i--) {
    // if k less then or equal to zero, return the current number
    if (counting[i]) {
      k -= counting[i][0];
      if (k <= 0) return i * -1;
    }
  }

  // iterate through the array
  for (let i = 0; i < counting.length; i++) {
    // if k less then or equal to zero, return the current number
    if (counting[i]) {
      k -= counting[i][1];
      if (k <= 0) return i;
    }
  }
};

function Tree(val, left = null, right = null) {
  this.left = left;
  this.right = right;
  this.val = val;
}

var tree = new Tree(3);
tree.left = new Tree(1);
tree.left.right = new Tree(2);
tree.right = new Tree(4);

console.log(kthSmallest(tree, 1));
