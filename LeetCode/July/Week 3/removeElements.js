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
  if (!head) return head;

  while (head.val === val) {
    head = head.next;
    if (!head) return head;
  }

  let list = new ListNode(head.val);
  let newHead = list;

  head = head.next;

  while (head) {
    if (head.val === val) {
      head = head.next;
    } else {
      list.next = new ListNode(head.val);
      list = list.next;
      head = head.next;
    }
  }

  return newHead;
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

//////////////// TESTS //////////////////

var list = buildLinkedList([1,2,3,4]);
var result = JSON.stringify(removeElements(list, 3));
var expected = JSON.stringify(buildLinkedList([1,2,4]));

// Should remove an element from a linked list
console.log(result === expected);

list = buildLinkedList([1,2,3,4,3,3,1]);
result = JSON.stringify(removeElements(list, 3));
expected = JSON.stringify(buildLinkedList([1,2,4,1]));

// should remove multiple elements from a linked list
console.log(result === expected);

list = buildLinkedList([]);
result = JSON.stringify(removeElements(list, 3));
expected = JSON.stringify(buildLinkedList([]));

// should return null on an empty list
console.log(result === null);

list = buildLinkedList([1]);
result = JSON.stringify(removeElements(list, 1));
// expected = JSON.stringify(buildLinkedList([]));

// should return null
console.log(result === null);