/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    // edge if x less than 2 we dont need to run
    if (x < 2) return x;

    // always start the left from 2 and right as x divide by 2 with floor
    let left = 2;
    let right = Math.floor(x / 2);

    while (left <= right) {
        // start from (5 - 2)
        let midPointer = Math.floor((right - left) / 2 + left);

        num = midPointer * midPointer;
        // number greater than x
        if (num > x) {
            // we move right to midpoint - 1
            right = midPointer - 1;
        // number less than x
        } else if (num < x) {
            // we move left to midpoint + 1
            left = midPointer + 1;
        } else {
            // same we found
            return midPointer
        }
    }
    // no meet the point we always return right pointer
    return right;
};