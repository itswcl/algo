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
 * @return {number}
 */
var maxPathSum = function (root) {
    // initial the first max number based root.val
    let max = root.val;

    const findSums = (node) => {
        // base casue if node is null
        if (!node) return 0;

        // recursive call left and right max if negative we giv as 0
        let leftMax = Math.max(findSums(node.left), 0);
        let rightMax = Math.max(findSums(node.right), 0);

        // compared the max and current node + left + right child
        max = Math.max(max, node.val + leftMax + rightMax);

        // each run return the path of sum from node and left or node and right
        return Math.max(node.val + leftMax, node.val + rightMax)
    }

    // run helper function to find sum in each path
    findSums(root)
    // return the result
    return max;
};