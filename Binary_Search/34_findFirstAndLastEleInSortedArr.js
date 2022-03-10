/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let result = [-1, -1]
    let left = 0;
    let right = nums.length - 1;

    // first BinarySearch
    while(left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        // look for first element in end of search;
        // we want til the midpoint
        if (nums[mid] >= target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    // if no first position then return default result
    if (nums[left] !== target) return result;
    // else we set the first index to result array;
    result[0] = left

    // reset the left and right we search the second time for second element
    left = 0; right = nums.length - 1;

    while(left <= right) {
        let mid = left + Math.floor((right - left) / 2)
        // we dont include the midpoint
        if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    result[1] = right;

    return result;
};