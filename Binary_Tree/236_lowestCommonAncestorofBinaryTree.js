/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    // dfs recursion
    const dfs = (node) => {
        if (!node || node === p || node === q) return node;

        let left = dfs(node.left);
        let right = dfs(node.right);

        return left && right ? node : left || right;
    }

    return dfs(root)
    //     if (!root || p === root || q === root) return root;

    //     let leftNode = lowestCommonAncestor(root.left, p, q);
    //     let rightNode = lowestCommonAncestor(root.right, p, q);

    //     return leftNode && rightNode ? root : leftNode || rightNode;
};