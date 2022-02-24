/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// [0, 1, 2, 2, 3, 0, 4, 2], 2
// [0, 1, 4, 0, 3]

var removeElement = function (nums, val) {
    let leftPointer = 0;
    let rightPointer = nums.length - 1;

    while (leftPointer <= rightPointer) {
        // if the backward number same as val
        if (nums[rightPointer] === val) {
            // remove ele
            nums.pop()
            // move right pointer 1
            rightPointer--;
        } else {
            // backward not val but front
            if (nums[leftPointer] === val) {
                // switch left pointer element to right pointer element
                [nums[leftPointer], nums[rightPointer]] = [nums[rightPointer], nums[leftPointer]]
                // remove ele
                nums.pop()
                // move right pointer 1
                rightPointer--;
            }
            // both side not the ele move left and not move right until right has same value
            leftPointer++;
        }
    }
};