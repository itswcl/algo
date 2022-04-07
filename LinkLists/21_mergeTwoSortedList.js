var mergeTwoLists = function (list1, list2) {
    // initial head and keep the tail for use
    let head = new ListNode();
    let tail = head;

    // iterate thru as long as both has nodes
    while (list1 && list2) {
        // check the node val whoever smaller
        if (list1.val < list2.val) {
            // replace the tail next to the smaller list
            tail.next = list1;
            // update list to list next
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        // each iterate we move tail to end node
        tail = tail.next
    }

    // link the reminder list from either list2 or list1
    tail.next = list1 === null ? list2 : list1;
    // return head.next because head itself is empty
    return head.next;
    // // if either list 1 or list 2 empty return it;
    // if (list1 === null) return list2;
    // if (list2 === null) return list1;

    // let head = new ListNode();
    // if (list1.val > list2.val) {
    //     head = list2;
    //     list2 = list2.next;
    // } else {
    //     head = list1;
    //     list1 = list1.next;
    // }

    // head.next = mergeTwoLists(list1, list2)
    // return head;
};