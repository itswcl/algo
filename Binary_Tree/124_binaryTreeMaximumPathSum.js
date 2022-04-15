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
    let max = root.val;

    const findSums = (node) => {
        if (!node) return 0;

        let leftMax = Math.max(findSums(node.left), 0);
        let rightMax = Math.max(findSums(node.right), 0);

        max = Math.max(max, node.val + leftMax + rightMax);
        return Math.max(node.val + leftMax, node.val + rightMax)
    }

    findSums(root)
    return max;
};