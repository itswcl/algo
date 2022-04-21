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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    // initial idx count from 1 because the update when we meet the k
    let idx = 1;
    let res;
    const inorder = (node) => {
        // if null we stop as base case
        if (!node) return;
        // keep check left until the end
        inorder(node.left);

        // if current idx meet target k we will updating the val
        if (idx === k) res = node.val;
        // increase the idx
        idx++;
        // check the right of nodes
        inorder(node.right);
    }

    // run helper function to find by inorder
    inorder(root)
    // get the result
    return res;
    //     const stack = [];
    //     let idx = 0;
    //     let cur = root;

    //     while(cur || stack) {
    //         // check the most left nodes exist til the end null
    //         while(cur) {
    //             // same time we push the pervious node into stack
    //             stack.push(cur);
    //             cur = cur.left
    //         }
    //         // after finding the leftest null we get the pervious node as current node
    //         cur = stack.pop();
    //         // finding as first node we increase idx by 1
    //         idx++
    //         // if we meet the target k we can stop at current value
    //         if (idx === k) return cur.val;
    //         cur = cur.right;
    //     }
};