/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// [4,5,6,7,0,1,2], 0
var search = function (nums, target) {
    // left and right index
    let leftIdx = 0;
    let rightIdx = nums.length - 1;

    // traverse til left > right
    while (leftIdx <= rightIdx) { // 0 <= 6
        const midPointer = Math.floor((rightIdx - leftIdx) / 2) + leftIdx // 3
        if (nums[midPointer] === target) { // 7 === 0
            return midPointer;

            // check if the numbers is ascending
        } else if (nums[midPointer] >= nums[leftIdx]) { // nums[3] - 7 >= nums[0] - 4
            // check if the target on the left side
            if (nums[leftIdx] <= target && target < nums[midPointer]) { // nums[0] <= 0 && 0 < nums[3]
                rightIdx = midPointer - 1;
                // if one condition failed it's in right side
            } else {
                leftIdx = midPointer + 1;
            }


            // else it's descending
        } else {
            // check if number in the right side
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