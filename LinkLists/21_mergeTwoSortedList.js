var mergeTwoLists = function (list1, list2) {
    // initial empty head
    let head = new ListNode();
    // set the tail as head because we moving the tail not head
    let tail = head;

    // as long as 2 list has nodes
    while (list1 && list2) {
        // we check whoever val smaller and link their listnode in tail then move listnode to next
        if (list1.val > list2.val) {
            tail.next = list2;
            list2 = list2.next;
        } else {
            tail.next = list1;
            list1 = list1.next;
        }
        // in the end we'll move the tail to end of node
        tail = tail.next
    }
    // after iterate one of list could still have node left we will add to end tail of next
    tail.next = list1 ? list1 : list2

    // then we return the head.next because head is empty node to link the real nodes
    return head.next

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