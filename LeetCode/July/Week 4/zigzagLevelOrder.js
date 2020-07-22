/*
Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7

return its zigzag level order traversal as:

[
  [3],
  [20,9],
  [15,7]
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

var zigzagLevelOrder = function(root) {
  let stack = [[root, 0]];
  let tree = [[root.val]];

  while (stack.length) {
    let [{val, right, left}, depth] = stack.pop();

    if (right) {
      stack.push([right, depth + 1]);

      if (tree[depth + 1] === undefined) {
        tree[depth + 1] = [[right.val, depth + 1]];
      } else {
        tree[depth + 1].push([right.val, depth + 1]);
      }
    }

    if (left) {
      stack.push([left, depth + 1]);

      if (tree[depth + 1] === undefined) {
        tree[depth + 1] = [[left.val, depth + 1]];
      } else {
        tree[depth + 1].push([left.val, depth + 1]);
      }
    }
  }

  console.log(tree);


  return result;
};

////////// TESTS /////////////

