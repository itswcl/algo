/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    return findMax(nums, startPoint = 0, endPoint = nums.length-1)
};

const findMax = (nums, leftSide, rightSide) => {
    // base case 1 element left
    if (leftSide === rightSide) {
        return nums[leftSide]
    }

    let midPoint = Math.floor((leftSide + rightSide) / 2)

    let leftSum = findMax(nums, leftSide, midPoint);
    let rightSum = findMax(nums, midPoint+1, rightSide);

    let crossSum = findCrossSum(nums, leftSide, midPoint, rightSide)
    return Math.max(leftSum, rightSum, crossSum)
}

const findCrossSum = (nums, leftSide, midpoint, rightSide) => {
    let sum = 0;

    let maxLeftSum = -Infinity;
    // the direction for the loop is
    // <<<<<<<<<<<<<<<
    for (let i = midpoint; i >= leftSide; i--) {
        sum += nums[i];
        maxLeftSum = Math.max(maxLeftSum, sum);
    }

    // reset the sum for right side
    sum = 0;
    let maxRightSum = -Infinity;
    // the direction for the loop is
    // >>>>>>>>>>>>>>>>>
    for (let i = midpoint+1; i <= rightSide; i++) {
        sum += nums[i];
        maxRightSum = Math.max(maxRightSum, sum)
    }

    return maxLeftSum + maxRightSum;
}