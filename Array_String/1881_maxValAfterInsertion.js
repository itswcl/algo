/**
 * @param {string} n
 * @param {number} x
 * @return {string}
 */

// 11, 9 > 911 - 55, 4 > 554 - 125. 4125 > 599 6 6599
var maxValue = function (n, x) {
    // check if negative n
    const isNegative = n[0] === "-";
    isNegative ? i = 1 : i = 0;

    // if negative we start from 1
    while (i < n.length) {
        // initial single digit for compaasion
        const single = n[i];

        // if n is negative, we want smallest digit in the left site
        if (isNegative && x < single) {
            return n.slice(0, i) + x + n.slice(i)
        }

        // if positive we want the largest digit in the left site
        if (!isNegative && x > single) {
            return n.slice(0, i) + x + n.slice(i)
        }

        i++
    }
    // if negative digit all smaller giving x
    // if positive digit all larger giving x
    // we both return default n digits concat with x
    return n + x;
};