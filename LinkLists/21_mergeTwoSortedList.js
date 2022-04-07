var mergeTwoLists = function (list1, list2) {
    let head = new ListNode();
    let tail = head;

    while (list1 && list2) {

        if (list1.val < list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next
    }

    tail.next = list1 === null ? list2 : list1;
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