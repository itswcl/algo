/**
 * @param {number[]} nums
 * @return {number}
 */
// [1, 1, 2] > [1, 2, 1]
// [0,0,1,1,1,2,2,3,3,4] > [0, 1, 2, 3, 4, 0, 1, 1, 2, 3, 4]
var removeDuplicates = function (nums) {
    let insertIdx = 1 // default first index is sorted
    // start from index 1
    for (let i = 1; i < nums.length; i++) {
        // compared the current Num and Pervious Num
        const currentNum = nums[i]
        const perviousNum = nums[i - 1]

        // if it's not same
        if (currentNum !== perviousNum) {
            // we update the insertIdx of element to current Num
            nums[insertIdx] = currentNum;
            // move up insertIdx by 1 "only if" we switch the element
            // so the insertIdx stick to the one haven't swtiched
            insertIdx++
        }
        // back to for loop to get next element
    }
    return insertIdx
};