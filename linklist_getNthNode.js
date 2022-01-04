function Node(data) {
    this.data = data;
    this.next = null;
}

function getNth(node, index) {

    let runner = node;
    let count = 0;

    while(runner) {
        if (count === index) {
            return runner;
        }

        count++;
        runner = runner.next;
    }
    throw "error"
}

function getNth2(node, index) {
    if (node === null || index < 0) throw "error";
    if (index === 0) return node;

    return getNth2(node.next, index - 1);
}