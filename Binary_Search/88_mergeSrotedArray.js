/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    // count backward to insert the nums1 element deserding
    let pointOne = m - 1;
    let pointTwo = n - 1;

    for (let i = m + n - 1; i >= 0; i--) {
        // edge if m is negative giving
        if (pointTwo < 0) { break; }

        // 1. pointer One still point in value
        // 2. if the number form 1 greater than number from 2
        if (pointOne >= 0 && nums1[pointOne] > nums2[pointTwo]) {
            // we assign new number to last element of nums1
            nums1[i] = nums1[pointOne];
            // drop the pointer
            pointOne--
        } else {
            // of num2 greater than num1 we assign
            // nums1[5] = nums2[2]
            nums1[i] = nums2[pointTwo];
            // drop the pointer
            pointTwo--
        }
    }
};