/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
    // odd start from idx 0
    let oddPointer = 0;

    // traverse the nums
    for (let i = 0; i < nums.length; i++) {
        // once we meet even number
        if (nums[i] % 2 === 0) {
            // we switch the even number with element where oddPointer at
            [nums[oddPointer], nums[i]] = [nums[i], nums[oddPointer]]
            // increase the oddPointer by 1
            oddPointer++;
        }
    }
    // return the nums
    return nums;
};