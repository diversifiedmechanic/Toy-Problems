/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

 let ListNode = function(val) {
   this.val = val;
   this.next = null;
 }

var addTwoNumbers = function(l1, l2) {
  let carry = 0;

  let firstSum = l1.val + l2.val;
  if (firstSum >= 10) {
    carry = 1;
    firstSum = firstSum % 10;
  }
  l1 = l1.next;
  l2 = l2.next;

  let newList = new ListNode(firstSum);
  let head = newList;

  while (l1 !== null || l2 !== null) {
    if (l1 === null) l1 = { val: 0, next: null};
    if (l2 === null) l2 = { val: 0, next: null};
    let sum = l1.val + l2.val + carry;

    if (sum >= 10) {
      carry = 1;
      sum = sum % 10;
    } else {
      carry = 0;
    }

    newList.next = new ListNode(sum);
    newList = newList.next;

    l1 = l1.next;
    l2 = l2.next;
  }

  if (carry) {
    newList.next = new ListNode(carry);
    newList = newList.next;
  }

    return head;
};

let A = new ListNode(2);
let head1 = A;
A.next = new ListNode(4);
A = A.next;
A.next = new ListNode(3);

let B = new ListNode(5);
let head2 = B;
B.next = new ListNode(6);
B = B.next;
B.next = new ListNode(4);

console.log(addTwoNumbers(head1, head2));
