/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
// [1,2,3,n,n,4,5] > "1,2,3,n,n,4,5" preorder
var serialize = function (root) {
    const res = []; // initial the array and join after with comma
    const dfs = (node) => {
        // base case when the node null (end of child)
        if (!node) return res.push("null")
        // each time we found node we turn into string and add to result
        res.push(node.val.toString())
        // run recursively with both left and right side start from left
        dfs(node.left);
        dfs(node.right);


    }
    dfs(root); // run the function with the giving root
    return res.join(",")
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
// "1,2,3,n,n,4,5" > [1,2,3,n,n,4,5]
var deserialize = function (data) {
    const vals = data.split(","); // transfer the str into array
    let idx = 0 // global idx to track the position

    const dfs = () => {
        // base case is when we meed the null
        if (vals[idx] === "null") {
            // increase the postion
            idx++
            // base case with null node
            return null;
        }
        // meet the number then we transfer to node and using Number to turn to integer
        let node = new TreeNode(Number(vals[idx]))
        // increase the position
        idx++
        // now we build left side til meet the null
        node.left = dfs();
        // same we build the right side til meet the null
        node.right = dfs();

        return node
    }

    // we need helper function to update with track of idx in global
    return dfs()
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */