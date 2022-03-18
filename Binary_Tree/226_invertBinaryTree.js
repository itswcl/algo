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
 * @return {TreeNode}
 */

// recursive
const invertTreeRecursive = (root) => {
    // check root null
    if (!root) return null;

    // switch right and left
    [root.right, root.left] = [root.left, root.right]

    // do the same thing for root.children both right and left
    invertTree(root.right);
    invertTree(root.left);

    return root;
}

// iterate - queue
const invertTreeQueue = (root) => {
    // check root null
    if (!root) return null;
    // initialize queue
    const queue = [root] // [ [nodes] ]
    // iterate as long as queue not empty
    while (queue.length > 0) {
        // initial current root
        let cur = queue.pop();
        // switch the right and left;
        let temp = cur.left;
        cur.left = cur.right;
        cur.right = temp;

        // check cur still not end we push the right/left back to queue
        if (cur.right) queue.push(cur.right);
        if (cur.left) queue.push(cur.left);
    }

    // root
    return root
}