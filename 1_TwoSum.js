/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    // hashmap and get index
    let numsDic = {}
    for (let i = 0; i < nums.length; i++) { // O(n)
        const currentNum = nums[i]          // 2, 7
        const diff = target - currentNum;   // 7, 2

        // check if the diff already in the map
        if (diff in numsDic) {              // false // true
            // true the diff of key NUMBER already in map we return the index from added and current
            return [numsDic[diff], i]                // [numsDic[2], 1] > [0, 1]
        } else {
            // if not, we add the current to dic
            numsDic[currentNum] = i;        // {2: 0}
        }
    }
};