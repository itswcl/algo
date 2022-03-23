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
    // if null just return []
    if (!root) return [];
    // default for values each row
    const maxValues = [];

    // work
    // we start from entire root
    const queue = [root];

    // first loop for the row level
    while(queue.length > 0) {
        // size to represent the nodes in the row
        let loopSize = queue.length;
        // default max for each roll we iterate
        let max = -Infinity;

        for (let i = 0; i < loopSize; i++) {
            // we shift the first in node
            const currentNode = queue.shift();
            // compare max and current node value
            max = Math.max(max, currentNode.val)
            // we add right and left node to the queue for comparing
            if (currentNode.right) queue.push(currentNode.right);
            if (currentNode.left) queue.push(currentNode.left);
        }
        // we done comparing the max value in row we add the max to the result array
        maxValues.push(max);
    }
    return maxValues;
};