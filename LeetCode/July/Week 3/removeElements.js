/*
Remove all elements from a linked list of integers that have value val.

Example:
Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5
*/

/*
* Definition for singly-linked list.
* function ListNode(val, next) {
*     this.val = (val===undefined ? 0 : val)
*     this.next = (next===undefined ? null : next)
* }
*/

/*
* @param {ListNode} head
* @param {number} val
* @return {ListNode}
*/

var removeElements = function(head, val) {
  let start = head;
  let prev = null;

  while (start) {
    if (start.val === val) {
      if (prev !== null) {
        prev = start.next;
        start = start.next;
      } else {
        head = head.next;
      }
    }
  }

  return head;
};

//////////// HELPERS ////////////
const ListNode = function(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
};

const buildLinkedList = function(arr) {
  let list = new ListNode(arr[0]);
  let head = list;

  for (let i = 1; i < arr.length; i++) {
    list.next = new ListNode(arr[i]);
    list = list.next;
  }

  return head;
};

