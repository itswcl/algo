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
var rightSideView = function (root) {
    // initial result array
    const res = []
    // check if giving node is null
    if (!root) return res;
    // initial the queue with first round of node
    const queue = [root]

    // keep iterate when queue has nodes
    while (queue.length) {
        // get the level of size node to make sure we only run the level of nodes
        const size = queue.length;

        // go thru the size of nodes if it meets last node of the queue we add to result
        for (let i = 0; i < size; i++) {
            // get the current node to check position
            const curNode = queue.shift();

            // if i as last node we add to result
            if (i === size - 1) res.push(curNode.val);

            // and follow the order left to right to push the node in
            if (curNode.left) queue.push(curNode.left);
            if (curNode.right) queue.push(curNode.right)
        }
    }
    // result
    return res;
};