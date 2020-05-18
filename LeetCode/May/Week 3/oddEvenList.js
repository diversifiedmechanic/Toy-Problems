/*
Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

Example 1:
Input: 1->2->3->4->5->NULL
Output: 1->3->5->2->4->NULL

Example 2:
Input: 2->1->3->5->6->4->7->NULL
Output: 2->3->6->7->1->5->4->NULL

Note:
  The relative order inside both the even and odd groups should remain as it was in the input.
  The first node is considered odd, the second node even and so on ...
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
var oddEvenList = function(head) {
  // if there isn't a first second and third node
  if (!head || !head.next || !head.next.next) {
    // return the head
    return head;
  }

  // set last odd to the first node
  let lastOdd = head;
  // set last even to the second node
  let lastEven = head.next;
  // set current to the third node
  let current = head.next.next;

  let h = head;

  // while there is a current node
  while (current) {
    // create a temp that is equal to the current node's next node
    let temp = current.next;

    // set the current node's next to the lastOdd.next
    current.next = lastEven.next;

    // set the last odd's next to the last even's next
    lastOdd.next = lastEven.next;

    // set the last even's next to the node stored in temp
    lastEven.next = temp;

    // move last even and last odd to their next node
    lastEven = lastEven.next;
    lastOdd = lastOdd.next;

    // set the current node to last even's next node
    current = current.next;
  }

  return h;

};