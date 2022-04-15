/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    // initial queue with p and q pair
    const queue = [[p, q]]
    // go thru the queue
    while (queue.length) {
        // get the head pnode and qnode as pair
        const [pNode, qNode] = queue.shift();
        // check null and val
        // if both null we will skip to next
        if (!pNode && !qNode) continue
        // if either one is null it's false
        if (!pNode || !qNode) return false;
        // if the value same we still same node and move to next
        if (pNode.val === qNode.val) {
            queue.push([pNode.left, qNode.left])
            queue.push([pNode.right, qNode.right])
        } else {
            // if we meet val different then it's false
            return false
        }
    }

    return true;
    // // check null
    // if (!p && !q) return true;
    // if (!p || !q) return false;
    // // check val
    // if (p.val !== q.val) return false;
    // // DFS recursion
    // const left = isSameTree(p.left, q.left);
    // const right = isSameTree(p.right, q.right);
    // return left && right;
}