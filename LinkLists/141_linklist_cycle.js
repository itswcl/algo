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
    // current to race with head
    let current = head;
    // current and next are true
    while (current && current.next) {
        // start running head and current
        // head as the slow one
        head = head.next;
        // current as the fast one
        current = current.next.next;
        // if both meet then we find cycle
        if (head === current) return true;
    }
    //     // set a map
    //     const hash = new Map();
    //     // set runner
    //     let cur = head;

    //     // if current and current next true
    //     while (cur && cur.next) {
    //         // if the hash already has the key
    //         if (hash.has(cur)) return true;

    //         // set the hash key pair
    //         hash.set(cur, hash.get(cur)+1)
    //         // move to next
    //         cur = cur.next;
    //     }
    return false;
};