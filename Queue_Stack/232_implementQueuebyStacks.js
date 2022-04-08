
var MyQueue = function () {
    // using 2 stack to build queue
    this.stack1 = [];
    this.stack2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    // while we do the push
    // we will reverse the node into stack2
    while (this.stack1.length) {
        this.stack2.push(this.stack1.pop())
    }
    // then add the latest node into stack1
    this.stack1.push(x)
    // put back stack1 from stack2
    // so whatever earliest node will be on top of stack1
    while (this.stack2.length) {
        this.stack1.push(this.stack2.pop())
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    // as long as not empty we pop the earliest node on stack 1
    if (!this.empty()) {
        return this.stack1.pop();
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    // peek will be last node of stack1
    return this.stack1[this.stack1.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    // check empty based on the length of stack1 and stack2
    return this.stack1.length === 0 && this.stack2.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */