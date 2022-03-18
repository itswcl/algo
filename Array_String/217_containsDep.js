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