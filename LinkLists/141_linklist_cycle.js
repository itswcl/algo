/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    // floyd cycle finding algorithm
    let runner = head;
    while (runner && runner.next) {
        head = head.next;
        runner = runner.next.next;
        if (head === runner) return true;
    }
    //     // hash table if 2 then it's cycle
    //     const hash = new Map();
    //     let runner = head;

    //     // if (!head || !head.next) return false;
    //     while (runner && head.next) {
    //         if (hash.has(runner)) {
    //             return true;
    //         }
    //         hash.set(runner, hash.get(runner)+1)
    //         runner = runner.next;
    //     }
    return false;
};