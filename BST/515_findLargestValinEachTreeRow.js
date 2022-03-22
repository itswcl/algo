/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
    // if root is null
    if (!root) return [];

    // work on queue
    const queue = [root];
    // array to includes each level of max values
    const maxValues = [];

    // loop thru the current queue
    while (queue.length > 0) {
        // default the max as smallest int
        let max = -Infinity
        // loop the times based on the current queue size
        let size = queue.length

        // iterate thur based on size
        for (let i = 0; i < size; i++) {
            // queue as FIFO we shift the first element in queue
            const currentNode = queue.shift();
            // max value as default and current node val
            max = Math.max(max, currentNode.val)

            // we add left and right into the queue
            if (currentNode.right) queue.push(currentNode.right);
            if (currentNode.left) queue.push(currentNode.left);
        }
        // the size of loop over we add max into the result array
        maxValues.push(max);
    }
    return maxValues;
};