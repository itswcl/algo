class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class MyQueue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // CRUD
    enqueue(val) {
        const newNode = new Node(val);
        if (!this.size) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode; // link the first node.next to newNode
            this.tail = newNode; // new tail is the new node
        }
        this.size++;
    }

    dequeue() {
        if (this.size) {
            const node = this.head;
            this.head = this.head.next;
            node.next = null
            this.size--;
            return node.val;
        }
        return null
    }

    peek() {
        return this.size ? this.head.val : null;
    }

    empty() {
        return this.size === 0;
    }
}

var MyStack = function () {
    this.queue = new MyQueue();
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    let size = this.queue.size;
    this.queue.enqueue(x);

    while (size) {
        this.queue.enqueue(this.queue.dequeue())
        size--
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    return this.queue.dequeue()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    return this.queue.peek();
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.queue.size === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */