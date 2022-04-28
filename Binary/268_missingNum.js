/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    // XOR 2 ^ 3 => 1
    // a ^ a = a
    // a ^ 0 = 0
    let res;

    for (let i = 0; i < nums.length; i++) {
        // method 1 sum the idx and subtract by the current number
        // the reminder is the missing number
        // let curNum = nums[i]
        // res = res + i + 1 - curNum;

        // method 2 check the idx and num XOR
        // the temp result to XOR the previous result
        const idx = i + 1;
        const num = nums[i];
        res = res ^ idx ^ num;
    }
    return res;

};