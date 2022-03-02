/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */


var guessNumber = function (n) {
    // start from 1 and end at giving n
    let left = 1
    let right = n

    while (left <= right) {
        // midpoint from what we set up
        const mid = Math.floor((right - left) / 2) + left;

        // if mid meets the guessNum return mid
        if (guess(mid) === 0) return mid;

        // if mid < guessNum newLeft is mid + 1
        if (guess(mid) === 1) {
            left = mid + 1;
        // if mid > guessNum newRight is mid - 1
        } else if (guess(mid) === -1) {
            right = mid - 1;
        }
    }
};