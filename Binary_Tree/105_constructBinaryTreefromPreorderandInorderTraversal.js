/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    // map of inorder list to help us to divide left and right
    const inorderMap = new Map();
    // element as the key and idx as value to find midpoint
    for (let [idx, ele] of inorder.entries()) inorderMap.set(ele, idx)

    let index = 0 // increase based the location of preorder
    // input left and right boundries
    const build = (left, right) => {
        if (left > right) return null;

        let root = new TreeNode(preorder[index]) // find root
        let rootPoint = inorderMap.get(preorder[index]) // find root point in inorderMap
        index++ // increase 1 position

        root.left = build(left, rootPoint - 1);
        root.right = build(rootPoint + 1, right);

        return root;
    }

    // run help function with left and right boundries based on preorder size
    return build(0, preorder.length - 1)
};