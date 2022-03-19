/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    // map for counting element
    const numsDic = {}
    // once we find something show twice
    for (let num of nums) {
        if (numsDic[num]) {
            return true;
        } else {
            numsDic[num] = 1;
        }
    }
    return false;
};

const conDep = (nums) => {
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i+1]) {
            return true;
        }
    }
    return false;
}

const conDep2 = (nums) => {
    return nums.length !== [...new Set(nums)].length;
}