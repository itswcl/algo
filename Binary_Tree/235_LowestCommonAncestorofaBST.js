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
    // initial the root node
    let node = root;

    while (node) {
        // if node > p and q then it's in left
        if (node.val > p.val && node.val > q.val) {
            node = node.left;
            // if node < p and q then it's in right
        } else if (node.val < p.val && node.val < q.val) {
            node = node.right;
        } else {
            // return once we meet the node with p or q
            return node;
        }
    }

}