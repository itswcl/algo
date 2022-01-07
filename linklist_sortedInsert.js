function Node(data) {
    this.data = data;
    this.next = null;
}

function sortedInsert(head, data) {
    // Your code goes here.
    // Remember to return the head of the list.
    if (head === null) {
        return new Node(data)
    }
    if (head.data > data) {
        const newHead = new Node(data);
        newHead.next = head;
        return newHead;
    }

    let newNode = new Node(data);
    let prev = head
    let current = prev.next

    while (current) {
        if (current.data < newNode.data && current.next === null) {
            current.next = newNode;
            return head;
        }

        if (current.data < newNode.data) {
            prev = prev.next;
            current = current.next;
        }

        if (current.data > newNode.data) {
            newNode.next = current;
            prev.next = newNode;
            return head;
        }
    }

}