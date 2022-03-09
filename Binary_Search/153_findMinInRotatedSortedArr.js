/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = (nums) => {
    // default left index and right index
    let left = 0;
    let right = nums.length - 1;

    // check if nums only 1 ele // if length is 1 then right is "0"
    if (right === 0) return nums[0]
    // check if it's ascending order if it is then nums[0]
    if (nums[right] > nums[left]) return nums[0]

    // traverse the index
    while (right >= left) {
        // find the mid
        let mid = left + Math.floor((right - left) / 2)

        // if mid > mid + 1 means it's rotated and mid+1 is the min ele
        if (nums[mid] > nums[mid+1]) return nums[mid+1];
        // also we check mid and mid - 1 element if mid is less than mid - 1 then mid is mi ele
        if (nums[mid] < nums[mid-1]) return nums[mid];

        // check the direction we want to go
        if (nums[mid] > nums[0]) {
            // if nums mid > nums 0 then we move left index to right as new left
            left = mid + 1
        } else {
            // if nums mid < nums 0 then we move right index to left as new right
            right = mid - 1;
        }
    }
}