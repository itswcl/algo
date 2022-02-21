/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    return sqrtNums = nums.map((num) => {
        return num * num;
        // sort((a,b) => {return a-b}) for sorting number
    }).sort(function (a, b) { return a - b });
};

const sortedSqrtNums = (nums) => {
    const result = new Array(nums.length);
    let leftIdx = 0;
    let rightIdx = nums.length - 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (Math.abs(nums[leftIdx]) < Math.abs(nums[rightIdx])) {
            result[i] = nums[rightIdx] ** 2;
            right--;
        } else {
            result[i] = nums[leftIdx] ** 2;
            left++;
        }
    }
    return result;
}