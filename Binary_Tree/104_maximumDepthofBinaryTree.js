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
var maxDepth = function (root) {
    // *DFS* - stack;
    // initial stack with root and as layer 1
    const stack = [[root, 1]]
    let depthest = 0;

    while(stack) {
        const [curNode, depth] = stack.pop();

        if (curNode) {
            depthest = Math.max(depthest, depth);
            stack.push([curNode.left, depth + 1])
            stack.push([curNode.right, depth + 1])
        }
    }
    return depthest;
    // *BFS* - queue;
    // initial start depth as 0
    let depth = 0;
    // if root null return 0 depth
    if (!root) return depth;
    // initial queue with root in
    const queue = [root];
    // if queue is not empty
    while (queue.length) {
        // initial first level of size as queue.length
        // that way the queue size not moving based on left right push
        const curSize = queue.length
        // go thru first level size
        for (let i = 0; i < curSize; i++) {
            // get our head node and check left and right
            // if valid wee add back to queue
            const curNode = queue.shift();
            if(curNode.left) queue.push(curNode.left)
            if(curNode.right) queue.push(curNode.right);
            // now we end our first depth search
        }
        // add one level to depth
        depth++
    }
    return depth
    // // stop point // *DFS*
    // if (!root) return 0;
    // // run left side and right side
    // let leftMax = maxDepth(root.left);
    // let rightMax = maxDepth(root.right);
    // // + 1 as 1 node level to 1 + Math.max(0, 0) = 1
    // return 1 + Math.max(leftMax, rightMax)
};