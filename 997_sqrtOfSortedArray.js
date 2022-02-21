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

