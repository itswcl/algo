/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    // if empty lists then we add 1 node as empty into lists
    if (lists.length === 0) {
        const tempNode = new ListNode();
        lists.push(tempNode.next);
    }

    // as long as the lists not 1 node meaning we still have node to merge
    while (lists.length !== 1) {
        const list1 = lists.shift();
        const list2 = lists.shift();
        const mergeList = mergeTwoList(list1, list2);
        // we take first and second list to merge then push to the end of lists
        lists.push(mergeList)
    }
    // in the end it will result 1 element inside of lists it's the final merged
    return lists[0];
}

const mergeTwoList = (list1, list2) => {
    if (list1 === null) return list2;
    if (list2 === null) return list1;

    // we need head and tail and each time new node we add to tail
    let head = new ListNode();
    let tail = head;

    while (list1 && list2) {
        // compare first node of list1 and list2
        if (list1.val < list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }
    // in the end of one of list1 or list2
    tail.next = list1 ? list1 : list2;
    // first node of head is null we return the node we link from list1/list2
    return head.next;
}