/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    //     let max = -Infinity;
    //     for (let i = 0; i < nums.length; i++) {
    //         let tempMax = nums[i];
    //         max = Math.max(max, tempMax);

    //         for (let j = i + 1; j < nums.length; j++) {
    //             const subNum = nums[j];
    //             tempMax = tempMax * subNum
    //             max = Math.max(max, tempMax);
    //         }
    //     }
    //     return max;
    // initial the start point from idx 0
    let max = nums[0], min = nums[0], result = nums[0];

    // traverse from index the second element
    for (let i = 1; i < nums.length; i++) {

        // each element we will evaluate the max/min/result
        // temprate max and min from the max * current element
        const tempMax = max * nums[i]
        const tempMin = min * nums[i]

        // update the max and min by giving current / tempMax / tempMin
        max = Math.max(nums[i], tempMax, tempMin)
        min = Math.min(nums[i], tempMax, tempMin)
        // update the result by checking max and pervious result
        result = Math.max(result, max)

    }
    // return the last result
    return result;
};