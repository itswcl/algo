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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
    //BFS
    const isSame = (node, subNode) => {
        // initial with root of both
        const queue = [[node, subNode]];

        // iterate thru intial queue
        while (queue.length) {
            // get both node out from the queue
            const [main, sub] = queue.pop();
            // if both null we will skip
            if (!main && !sub) continue;

            // if either null or val different we stop at false
            if (!main || !sub || main.val !== sub.val) return false;
            // then we keep comparing left and right side
            queue.push([main.left, sub.left], [main.right, sub.right])
        }
        return true;
    }
    // initial queue from root (only root need to move)
    const queue = [root];

    // iterate thru queue
    while (queue.length) {
        // get the node out of queue
        const curNode = queue.pop();
        // if null we will skip
        if (!curNode) continue;
        // check the node if same as sub
        if (isSame(curNode, subRoot)) return true;
        // put left and righ to the queue to compare with sub
        queue.push(curNode.left, curNode.right)
    }
    return false;

    // DFS
    //     const isSame = (node, subNode) => {
    //     // 1. both null
    //     if (!node && !subNode) return true;
    //     // 2. if head same we check both nodes left and right
    //     if (node && subNode && node.val === subNode.val) {
    //         return isSame(node.left, subNode.left) && isSame(node.right, subNode.right)
    //     }
    //     // 3. otherwise false
    //     return false;
    //     }

    //     // check if sub is null then true
    //     if (!subRoot) return true
    //     // check if root is null then false
    //     if (!root) return false;
    //     // 1. same tree
    //     if (isSame(root, subRoot)) return true;

    //     // 2. left nodes
    //     let isLeftSub = isSubtree(root.left, subRoot);
    //     // 3. right nodes
    //     let isRightSub = isSubtree(root.right, subRoot);
    //     return isLeftSub || isRightSub
};