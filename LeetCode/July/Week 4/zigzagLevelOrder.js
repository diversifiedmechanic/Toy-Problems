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
  if (!root) return [];

  let stack = [[root, 0]];
  let tree = [[root.val]];

  while (stack.length) {
    let [{val, right, left}, depth] = stack.shift();

    if (left) {
      stack.push([left, depth + 1]);

      if (tree[depth + 1] === undefined) {
        tree[depth + 1] = [left.val];
      } else {
        tree[depth + 1].push(left.val);
      }
    }

    if (right) {
      stack.push([right, depth + 1]);

      if (tree[depth + 1] === undefined) {
        tree[depth + 1] = [right.val];
      } else {
        tree[depth + 1].push(right.val);
      }
    }
  }

  tree.forEach((row, idx) => {
    if (idx % 2 !== 0) {
      tree[idx] = tree[idx].reverse();
    }
  });

  return tree;
};

////////// TESTS /////////////
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
};

var node = new TreeNode(1);
node.left = new TreeNode(2);
node.right = new TreeNode(3);
node.left.left = new TreeNode(4);
node.left.right = new TreeNode(5);
node.right.left = new TreeNode(6);
node.right.right = new TreeNode(7);
node.left.left.left = new TreeNode(8);
node.left.left.right = new TreeNode(9);
node.left.right.left = new TreeNode(10);
node.left.right.right = new TreeNode(11);
node.right.left.left = new TreeNode(12);
node.right.left.right = new TreeNode(13);
node.right.right.left = new TreeNode(14);
node.right.right.right = new TreeNode(15);

console.log(zigzagLevelOrder(node));

