function Node(data) {
    this.data = data;
    this.next = null;
}

function push(head, data) {
    // Go.
    let node = new Node(data);
    node.next = head;
    return node;

}

function buildOneTwoThree() {
    // Go.
    //   SLL = push(push(push(null, 3), 2), 1);
    //   SLL = push(SLL, 2);
    //   SLL = push(SLL, 1);
    return push(push(push(null, 3), 2), 1);
}