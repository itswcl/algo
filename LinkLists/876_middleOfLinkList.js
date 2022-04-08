/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    // initial first run and second run
    let first = head, second = head;
    // stop run when first null/first next null
    while (first && first.next) {
        // we run first double speed then second
        // when first null then second will meet the half point
        first = first.next.next;
        second = second.next;
    }
    // return the second point
    return second;
    //     let length = 0, runner = head;
    //     while (runner) {
    //         length++;
    //         runner = runner.next;
    //     }
    //     let midPoint = Math.floor(length / 2);

    //     while(midPoint > 0) {
    //         head = head.next;
    //         midPoint--;
    //     }
    //     return head;
};