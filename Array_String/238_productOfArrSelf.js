/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let result = []

    for (let i = 0; i < nums.length; i++) {
        i === 0
            ? result[i] = 1
            : result[i] = result[i - 1] * nums[i - 1]
    }

    let rightEle = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] = result[i] * rightEle;
        rightEle *= nums[i]
    }

    return result;
    //     // have left count and right count array with all 1s because first ele from left and from right are 1
    //     // result array for left ele times right ele
    //     let left = new Array(nums.length).fill(1);
    //     let right = new Array(nums.length).fill(1);
    //     let res = [];

    //     // iterate the left and update the left array from index 1
    //     for (let i = 1; i < nums.length; i++) {
    //         left[i] = left[i - 1] * nums[i-1];
    //     }

    //     // iterate the right and update the right array from index length - 2
    //     for (let i = nums.length - 2; i >= 0 ; i--) {
    //         right[i] = right[i+1] * nums[i+1];
    //     }

    //     // we combine both left and right array to result array
    //     for (let i = 0; i < left.length; i++) {
    //         res[i] = left[i] * right[i]
    //     }
    //     return res ;
    // // -------------------- iterate but O(N**2)
    //     let res = [];
    //     for (let i = 0; i < nums.length; i++) {
    //         let curSum = 1;
    //         for(let j = 0; j < nums.length; j++) {
    //             if (i === j) {
    //                 continue;
    //             }
    //             curSum *= nums[j]
    //         }
    //         res[i] = curSum;
    //     }
    //     return res;
};