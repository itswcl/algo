/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    // initial the letter count
    const letterCount = {};
    // initial left right pointer also the max result
    // we need to track the max letter as well to count the k limit
    let left = 0, right = 0, maxChar = 0, maxResult = 0;

    while (right < s.length) {
        const currentRight = s[right];
        // adding letter into map
        letterCount[currentRight] ? letterCount[currentRight]++ : letterCount[currentRight] = 1;
        // track the max count
        maxChar = Math.max(maxChar, letterCount[currentRight])

        // if the size of left to right minus max letter greater than k limit
        // we need to move our left by 1
        if (right - left + 1 - maxChar > k) {
            const currentLeft = s[left];
            letterCount[currentLeft]--
            left++
        }
        // update the result max substring
        maxResult = Math.max(maxResult, right - left + 1)
        // increase right pointer
        right++
    }
    return maxResult;
};