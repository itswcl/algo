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
    // 1. find middle list
        // run 2 pointers first and second
        let first = head, second = head;
        // first.next meet null we stop
        while (first && first.next) {
            // we run first twice faster then second
            first = first.next.next;
            second = second.next
        }
        // second is our mid list
    // 2. reverse middle list
        // prev as null and current is second
        let prev = null, current = second;
        // iterate thur til current meet null
        while(current) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
    // 3. merge first and prev list
        first = head, second = prev;
        while(second.next) {
            // first to move our first next
            let next = first.next;
            first.next = second;
            first = next;
            // second to more our second next
            next = second.next;
            second.next = first;
            second = next;
        }
}