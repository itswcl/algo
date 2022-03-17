/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
    // [2, 1, 2] > [1, 2, 2] sort the number from small to large
    nums = nums.sort((a, b) => a - b)

    // iterate back thru with at least 3 element
    for (let i = nums.length - 3; i >= 0; i--) {
        // a first ele in 3 element b as sec and c as third
        const a = nums[i]   // 1
        const b = nums[i + 1] // 2
        const c = nums[i + 2] // 2

        // since it's sorted small to large as long as a + b is greater c then it's the result
        if (a + b > c) { // 1 + 2 > 2
            return a + b + c;
        }
    }
    // 1. length less than 3
    // 2. cant find a + b > c val
    return 0;
};