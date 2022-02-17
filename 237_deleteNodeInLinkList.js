/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) { // O(1)
    // replace the node by node.next
    // node value will be next next value
    node.val = node.next.val;
    // the pointer node next will be node next next
    node.next = node.next.next;
};