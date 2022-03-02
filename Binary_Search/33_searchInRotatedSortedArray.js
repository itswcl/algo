/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    // left and right index
    let leftIdx = 0;
    let rightIdx = nums.length - 1;

    // treverse til left > right
    while (leftIdx <= rightIdx) {
        const midPointer = Math.floor((rightIdx - leftIdx) / 2) + leftIdx
        if (nums[midPointer] === target) {
            return midPointer;

            // check if mid element is larger than start
        } else if (nums[midPointer] >= nums[leftIdx]) {
            if (nums[leftIdx] <= target && target < nums[midPointer]) {
                rightIdx = midPointer - 1;
            } else {
                leftIdx = midPointer + 1;
            }

        } else {
            if (nums[rightIdx] >= target && target > nums[midPointer]) {
                leftIdx = midPointer + 1;
            } else {
                rightIdx = midPointer - 1;
            }
        }

    }
    // dont meet any return -1
    return - 1;
};