/**
 * @param {number[]} nums
 * @return {number}
 */
// [1, 1, 2] // [1, 2]
// [0, 0, 1, 1, 1, 2, 2, 3, 3, 4] // [0 ,1, 2, 3, 4]
var removeDuplicates = function (nums) {
    let insertIdx = 1;
    for (let i = 1; i < nums.length; i++) {
        // 2 !== 1
        // nums[1] = 2
        if (nums[i] !== nums[i - 1]) {
            nums[insertIdx] = nums[i];
            insertIdx++;
        }
    }
    return insertIdx
};