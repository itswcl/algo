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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    // BFS
    // initial level vals
    const levelVals = []
    // stop if root is null
    if (!root) return levelVals;
    // initial queue for level FIFO start with root
    const queue = [root]

    while(queue.length) {
        // initial temp array to hold each level of values
        const values = []
        // make sure we on the level of size (root = 1 secondLevel = 2 etc)
        const levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            // in each level we will bring out the node first in
            const curNode = queue.shift();
            // push the value into temp values array
            values.push(curNode.val);
            // check both side if valid add into queue
            if (curNode.left) queue.push(curNode.left);
            if (curNode.right) queue.push(curNode.right);
        }
        // after iterate the level of nodes we add the entire values of level into main result
        levelVals.push(values);
    }
    // return result
    return levelVals;

    // // DFS
    // // initial the level vals
    // const levelVals = [];

    // const dfs = (node, level) => {
    //     // if node is null we stop
    //     if (!node) return;

    //     // check the values in each level first time is index 0 as input level
    //     // follow thru each recursive call it will increment by 1
    //     levelVals[level] ? levelVals[level].push(node.val) : levelVals[level] = [node.val];

    //     // recursive call left and right site with 1 level incrementing
    //     dfs(node.left, level + 1);
    //     dfs(node.right, level + 1);
    // }

    // // run the helper function with input of node and level start from 0
    // dfs(root, 0)
    // // return the result
    // return levelVals;
}