/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
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

// [2, 7, 11, 15], 9 >> [0, 1]
// [3, 2, 4], 6 >> [1, 2]
// [3, 3], 6 >> [0, 1]

const twoSum = (nums, target) => {
    // force O(N ** 2)
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] + nums[j] === target) {
    //             return [i, j];
    //         }
    //     }
    // }

    // hashMap O(N)
    // map
    const numsMap = {}

    // iterate thur nums;
    for (let i = 0; i < nums.length; i++) {
        // dictionary key num with val of target difference
        const num = nums[i];
        // check the diff already in map or not
        const diff = target - num

        if (diff in numsMap) {
            // meet the diff and return
            // [nums[2], 1] = 0, 1
            return [nums[diff], i]
        } else {
            // {2: 0}
            numsMap[num] = i;
        }
    }
}

