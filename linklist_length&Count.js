function Node(data) {
    this.data = data;
    this.next = null;
}

function length(head) {
    // Your code goes here.
    let runner = head;
    let count = 0;

    while (runner) {
        count++;
        runner = runner.next;
    }
    return count;
}

function count(head, data) {
    // Your code goes here.ß
    let runner = head;
    let count = 0;

    while (runner) {
        if (runner.data === data) {
            count++;
        }
        runner = runner.next;
    }
    return count;
}