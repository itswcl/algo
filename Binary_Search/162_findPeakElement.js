/**
 * @param {number[]} nums
 * @return {number}
 */
var search = (nums, left, right) => {
    // if left same as right then left is peak
    if (left === right) return left;

    // find mid point
    let mid = Math.floor((right - left) / 2 + left);
    // check if mid is greater than next element
    if (nums[mid] > nums[mid + 1]) {
        // if is we reset right point as current mid
        return search(nums, left, right = mid)
    } else {
        // if mid is less than next element we reset left to that element mid+1
        return search(nums, left = mid + 1, right);
    }

}

var findPeakElement = function (nums) {
    // helper function to have left point and right point
    return search(nums, left = 0, right = nums.length - 1)
    //     ---------------------------------------------------

    // let left = 0;
    // let right = nums.length - 1;

    //     while(left < right) {
    //         let mid = Math.floor((right - left) / 2 + left);

    //         if (nums[mid] > nums[mid+1]) {
    //             right = mid;
    //         } else {
    //             left = mid + 1;
    //         }
    //     }
    //     return left
    //     ---------------------------------------------------
    // for (let i = 0; i < nums.length - 1; i++) {
    //     if (nums[i] > nums[i+1]) {
    //         return i;
    //     }
    // }
    // return nums.length - 1;
};