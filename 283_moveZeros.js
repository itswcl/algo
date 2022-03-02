/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    // start from no 0 in the nums
    let zeroIdx = -1;

    // traverse the nums
    for (let reader = 0; reader < nums.length; reader++) {
        // if we meet the first 0
        if (nums[reader] === 0 && zeroIdx === -1) {
            // set idx from the 0
            zeroIdx = reader;
        }

        // if we meet non 0 and have zeroIdx set up
        if (nums[reader] !== 0 && zeroIdx !== -1) {
            // we switch the element from the idx of 0 and current element
            [nums[reader], nums[zeroIdx]] = [nums[zeroIdx], nums[reader]]
            // increase the zero index because the switch
            zeroIdx++;
        }
    }
    return nums;

};