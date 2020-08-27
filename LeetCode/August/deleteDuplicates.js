/*
Given a sorted linked list, delete all duplicates such that each element appear only once.

Example 1:
Input: 1->1->2
Output: 1->2

Example 2:
Input: 1->1->2->3->3
Output: 1->2->3
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
* @return {ListNode}
*/

var deleteDuplicates = function(head) {
    if (!head) return head;

    let newHead = head;
    let previousNode = head;

    let currentNode = head.next;

    while(currentNode) {
        if (currentNode.val === previousNode.val) {
            previousNode.next = currentNode.next;
        } else {
            previousNode = currentNode;
        }
        currentNode = currentNode.next;
    }

    return newHead;
};

/////////////////// TESTS /////////////////

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let A = new ListNode(1);
A.next = new ListNode(1);

// should remove a single duplicate
console.log(deleteDuplicates(A));

A = new ListNode(1);
B = new ListNode(2);
A.next = B;
let C = new ListNode(2);
B.next = C;

// should only remove duplicates
console.log(deleteDuplicates(A));

A = new ListNode(1);
B = new ListNode(2);
A.next = B;
C = new ListNode(3);
B.next = C;

// should do nothing if no duplicates
console.log(deleteDuplicates(A));

A = new ListNode(1);
B = new ListNode(1);
A.next = B;
C = new ListNode(1);
B.next = C;

// should remove triples
console.log(deleteDuplicates(A));