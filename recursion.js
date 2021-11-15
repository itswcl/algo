/*
  Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
// const expected1 = 6;

/**
 * Add params if needed for recursion
 * Recursively sums the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The sum of the given nums.
 */
function sumArr(nums, i=0) {
    var sum = 0
    if (i == nums.length){
        return 0
    }
    else{
        sum += nums[i] + sumArr(nums, i+1)
    }
    return sum

}

function countDown(num) {
    // base case
    if (num === 0) {
        console.log("lift off")
    } else {
    // recursive case
        console.log(num)
        countDown(num - 1)
    }
}

/*****************************************************************************/

/*
Recursive Sigma
Input: integer
Output: sum of integers from 1 to Input integer
*/

const num1 = 5;
const expected1 = 15;
// Explanation: (1+2+3+4+5)

const num2 = 2.5;
const expected2 = 3;
// Explanation: (1+2)

const num3 = -1;
const expected3 = 0;

/**
 * Recursively sum the given int and every previous positive int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num
 * @returns {number}
 */
function recursiveSigma(num) {
    // var sum = 0
    if(num < 1) {
        return 0
    } else {
        return Math.floor(num) + recursiveSigma(num-1)
        // return Math.floor(num) +recursiveSigma(Math.floor(num)-1)
    }
}

console.log(recursiveSigma(-1))