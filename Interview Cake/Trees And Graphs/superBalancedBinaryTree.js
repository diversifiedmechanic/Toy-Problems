/*
 Write a function to see if a binary tree ↴ is "superbalanced" (a new tree property we just made up).

A tree is "superbalanced" if the difference between the depths of any two leaf nodes ↴ is no greater than one.

Here's a sample binary tree node class:
*/
class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}


function isBalanced(treeRoot, depth = 0) {
  // if no right or left // return 0
  if (treeRoot.left === null && treeRoot.right === null) {
    if (depth === 0) return true;
    return 0;
  }

  // vars for left and right depths
  let leftDepth, rightDepth;

  // if there is a left side
  if (treeRoot.left) {
    // get the value of the left side
    leftDepth = isBalanced(treeRoot.left, depth + 1);

    // if falsy and not zero
    if (!leftDepth && leftDepth !== 0) return false;

    // add 1 to the returned value
    leftDepth += 1;

  // otherwise set left to 0
  } else {
    leftDepth = 0;
  }

  // if there is a right side
    // find the depth adding 1 to the returned value
  // otherwise set right to 0

  if (treeRoot.right) {
    // get the value of the left side
    rightDepth = isBalanced(treeRoot.right, depth + 1);

    // if falsy and not zero
    if (!rightDepth && rightDepth !== 0) return false;

    // add 1 to the returned value
    rightDepth += 1;

  // otherwise set left to 0
  } else {
    rightDepth = 0;
  }

  console.log('leafVal: ', treeRoot.value, 'leftDepth: ', leftDepth, 'rightDepth: ', rightDepth);

  // leftDepth - rightDepth is larger then 2 and one side is not 0
  if (leftDepth !== 0 && rightDepth !== 0 && Math.abs(leftDepth - rightDepth) > 1) {
    return false;

    // otherwise
  } else if (depth !== 0) {
    // return the greater of leftDepth or rightDepth
    return Math.max(leftDepth, rightDepth);
  } else {
    return true;
  }
}

var desc, treeRoot, leftNode, rightNode;

// desc = 'full tree';
// treeRoot = new BinaryTreeNode(5);
// leftNode = treeRoot.insertLeft(8);
// leftNode.insertLeft(1);
// leftNode.insertRight(2);
// rightNode = treeRoot.insertRight(6);
// rightNode.insertLeft(3);
// rightNode.insertRight(4);
// assertEquals(isBalanced(treeRoot), true, desc);

// desc = 'both leaves at the same depth';
// treeRoot = new BinaryTreeNode(3);
// leftNode = treeRoot.insertLeft(4);
// leftNode.insertLeft(1);
// rightNode = treeRoot.insertRight(6);
// rightNode.insertRight(9);
// assertEquals(isBalanced(treeRoot), true, desc);

// desc = 'leaf heights differ by one';
// treeRoot = new BinaryTreeNode(6);
// leftNode = treeRoot.insertLeft(1);
// rightNode = treeRoot.insertRight(0);
// rightNode.insertRight(7);
// assertEquals(isBalanced(treeRoot), true, desc);

// desc = 'leaf heights differ by two';
// treeRoot = new BinaryTreeNode(6);
// leftNode = treeRoot.insertLeft(1);
// rightNode = treeRoot.insertRight(0);
// rightNode.insertRight(7).insertRight(8);
// assertEquals(isBalanced(treeRoot), false, desc);

// desc = 'three leaves total';
// treeRoot = new BinaryTreeNode(1);
// leftNode = treeRoot.insertLeft(5);
// rightNode = treeRoot.insertRight(9);
// rightNode.insertLeft(8);
// rightNode.insertRight(5);
// assertEquals(isBalanced(treeRoot), true, desc);

// desc = 'both subtrees superbalanced';
// treeRoot = new BinaryTreeNode(1);
// leftNode = treeRoot.insertLeft(5);
// rightNode = treeRoot.insertRight(9);
// rightNode.insertLeft(8).insertLeft(7);
// rightNode.insertRight(5);
// assertEquals(isBalanced(treeRoot), false, desc);

// desc = 'both subtrees superbalanced two';
// treeRoot = new BinaryTreeNode(1);
// leftNode = treeRoot.insertLeft(2);
// leftNode.insertLeft(3);
// leftNode.insertRight(7).insertRight(8);
// treeRoot.insertRight(4).insertRight(5).insertRight(6).insertRight(9);
// assertEquals(isBalanced(treeRoot), false, desc);

desc = 'three leaves at different levels';
treeRoot = new BinaryTreeNode(1);
leftNode = treeRoot.insertLeft(2);
leftLeft = leftNode.insertLeft(3);
leftNode.insertRight(4);
leftLeft.insertLeft(5);
leftLeft.insertRight(6);
treeRoot.insertRight(7).insertRight(8).insertRight(9).insertRight(10);
assertEquals(isBalanced(treeRoot), false, desc);

// desc = 'only one node';
// treeRoot = new BinaryTreeNode(1);
// assertEquals(isBalanced(treeRoot), true, desc);

// desc = 'linked list tree';
// treeRoot = new BinaryTreeNode(1);
// treeRoot.insertRight(2).insertRight(3).insertRight(4);
// assertEquals(isBalanced(treeRoot), true, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}