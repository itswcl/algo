/**
 * @param {number[]} nums
 * @return {number}
 */
// come back for review later
// ----------------- iterate dynamic programming ----O(N)--------------
var maxSubArr = (nums) => {
    // initial current Sum and the max
    let curSum = 0, max = -Infinity;
    // iterate thur the number
    for (let i = 0; i < nums.length; i++) {
        // update current Sum comparing current number and current number plus sum
        curSum = Math.max(nums[i], nums[i] + curSum);
        // if current sum greater than the max we up date max
        curSum > max ? max = curSum : max;
    }
    return max;
}

// --------------------------- divide Conquer --------------------------
var maxSubArray = function (nums) {
    return findMax(nums, startPoint = 0, endPoint = nums.length - 1)
};

const findMax = (nums, leftSide, rightSide) => {
    // base case 1 element left
    if (leftSide === rightSide) {
        return nums[leftSide]
    }

    // [X,X,X,MIDPOINT,X,X,X]
    let midPoint = Math.floor((leftSide + rightSide) / 2)

    // [X,X,X,MID]
    let leftSum = findMax(nums, leftSide, midPoint);
    // [X,X,X]
    let rightSum = findMax(nums, midPoint + 1, rightSide);

    // [X,X,X,MIDPOINT,X,X,X]
    let crossSum = findCrossSum(nums, leftSide, midPoint, rightSide)
    return Math.max(leftSum, rightSum, crossSum)
}

const findCrossSum = (nums, leftSide, midpoint, rightSide) => {
    let sum = 0;

    // cant use 0 here because we have negative number in array
    let maxLeftSum = -Infinity;
    // the direction for the loop is
    // *for crossmax we must count left from mid to left
    // <<<<<<<<<<<<<<<Start from midpoint and count backward
    for (let i = midpoint; i >= leftSide; i--) {
        // add up the number
        sum += nums[i];
        // compare the updated sum with maxLeftSum
        // update maxLeftSum with updated sum if larger
        maxLeftSum = Math.max(maxLeftSum, sum);
    }

    // reset the sum for right side
    sum = 0;
    // cant use 0 here because we have negative number in array
    let maxRightSum = -Infinity;
    // the direction for the loop is
    // *and count right from mid to right
    // start from midpoint and count forward >>>>>>>>>>>>>>>>>
    for (let i = midpoint + 1; i <= rightSide; i++) {
        // update sum
        sum += nums[i];
        // compared updated sum and maxRightSum
        // if larger then update
        maxRightSum = Math.max(maxRightSum, sum)
    }

    // add up both left and right for crossSum
    return maxLeftSum + maxRightSum;
}