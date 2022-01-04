class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

function parse(string) {
    // Write your code here
    if (string[0] === "n") return null;
    let arrList = string.split(" -> ")

    let head = new Node(parseInt(arrList[0]))
    let current = head;

    for(let i = 1; i < arrList.length - 1; i++) {
        current.next = new Node(parseInt(arrList[i]))
        current = current.next
    }

    return head;
}