/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    // counter head;
    let dummyList = new ListNode();
    dummyList.next = head;
    let first = head;
    let length = 0;
    while(first) {
        length++;
        first = first.next;
    }
    let stopPoint = length - n;
    first = dummyList;
    while(stopPoint > 0) {
        stopPoint--;
        first = first.next;
    }
    first.next = first.next.next;
    return dummyList.next;
    // // 2 pointer
    // // dummy list to contain from head;
    // let dummyList = new ListNode();
    // dummyList.next = head;
    // // start our 2 points from dummy as start point 0
    // let firstRun = dummy, secondRun = dummy;
    // // first we run first run to the stopPoint before the removed node
    // for (let i = 0; i <= n; i++) {
    //     firstRun = firstRun.next;
    // }
    // // now we have gap before first and second in n position
    // // we keep run the first and start to run second
    // // it will stop once the first reach the end null
    // while(first) {
    //     secondRun = secondRun.next;
    //     firstRun = firstRun.next;
    // }
    // // now the second run stop at the stopPoint
    // // we can remove the next to next next
    // secondRun.next = secondRun.next.next;
    // return dummyList.next;
}