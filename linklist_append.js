function Node(data) {
    this.data = data;
    this.next = null;
}

function append(listA, listB) {
    // Your code goes here.
    // Remember to return the head of the list.
    if (listA === null && listB === null) return null;
    if (listA === null) return listB;
    if (listB === null) return listA;
    if (listA.next === null) {
        listA.next = listB
        return listA;
    }

    let current = listA;

    while (current) {
        if (current.next === null) {
            current.next = listB;
            break;
        }
        current = current.next
    }
    return listA
}