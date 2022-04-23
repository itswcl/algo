/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
// 1, 2, 3, 4       // 1, 2, 3, 4, 5     // aabb
// 1, 4, 2, 3       // 1, 5, 2, 4, 3     // abab
var reorderList = function (head) {
    // first to split into 2 list
    let first = head, second = head;
    // stop when first reach the end of list
    // because first is 2 time of speed of second
    while (first && first.next) {
        first = first.next.next;
        second = second.next;
    }

    // then we reverse the second list
    let prev = null;
    let current = second;
    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    // then we find out reverse second list as "prev" because => >>>null to null<<<

    // and we merge our "first portion of list" with "prev" as our second part of list
    first = head, second = prev;
    console.log(head, prev)
    // [1,2,3] => [1,2], [3,2] we will only use if second.next exist
    // because the last element will be same as the last element in first we dont need
    while (second.next) {
        let next = first.next;
        first.next = second;
        first = next;

        next = second.next;
        second.next = first;
        second = next;

    }
}