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
        // dont wanna add negative value so ingnore as zero
        if (!node) return 0;

        // keep finding the child max from left and right
        // max 0 as if met negative we dont need the negative
        let leftMax = Math.max(findSums(node.left), 0);
        let rightMax = Math.max(findSums(node.right), 0);

        // update the max each time we find the path
        max = Math.max(max, node.val + leftMax + rightMax);

        // only able to return 1 side to parent because we not allowed to split into 2 path
        // only choose the max sum side
        return Math.max(leftMax + node.val, rightMax + node.val)
    }


    findSums(root)
    return max;
};