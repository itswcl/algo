function reverseList(head) {
    // become last node
    let prev = null
    // set runner
    let current = head;

    while (current) {
        // temp for current next node
        let next = current.next;
        // repoint the current next to prev
        current.next = prev;
        // current node will be come prev
        prev = current;
        // traverse to "next" node;
        current = next;
    }
    return prev;
    // function reverseList(list) {
    // // TODO: Your awesome code here
    // if (list === null) return null;
    // // setup the new list as reverse
    // let newList = [list[0], null];

    // // check if list of index 1 is not null
    // while (list[1]) {
    //     // add the second value to reverse list
    //     newList = [list[1][0], newList];
    //     // deeply check list
    //     list = list[1]
    // }

    // return newList;
}