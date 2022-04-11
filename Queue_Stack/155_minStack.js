
var MinStack = function () {
    this.mainStack = [];
    this.minStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    if (this.mainStack.length === 0) {
        this.mainStack.push(val)
        this.minStack.push(val)
    } else {
        this.mainStack.push(val);
        let latestVal = this.mainStack[this.mainStack.length - 1];
        let latestMin = this.minStack[this.minStack.length - 1];

        if (latestMin >= latestVal) {
            this.minStack.push(latestVal)
        }

    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    let pop = this.mainStack.pop()
    let latestMin = this.minStack[this.minStack.length - 1];
    if (pop === latestMin) {
        this.minStack.pop()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.mainStack[this.mainStack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.minStack[this.minStack.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */