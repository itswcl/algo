function reverseList(head) {
    // the last next will be null because we turn the >>>null to null<<<
    let prev = null;
    // we start from head
    let current = head;

    // keep iterate thur the current next
    while(current) {
        // get the next from current node
        let next = current.next;
        // set the next to the prev
        current.next = prev;
        // the prev will be the current node
        prev = current;
        // update the current to next
        current = next;
    }
    // return the prev since the head is the prev => null <<< head
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