/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    // freq table, start, maxResult,
    let count = {}, windowStart = 0, maxChar = 0, maxResult = 0

    // moving the rightpoint to right
    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        const endLetter = s[windowEnd];

        count[endLetter] ? count[endLetter]++ : count[endLetter] = 1;
        // update max char we only care the max char for repeat
        maxChar = Math.max(maxChar, count[endLetter])

        // check the window out of limit in the char of k
        if (windowEnd - windowStart + 1 - maxChar > k) {
            const startLetter = s[windowStart]
            // decrease the start letter
            count[startLetter]--;
            // shift the window to right
            windowStart++
        }

        // update the max result each time it's valid
        maxResult = Math.max(maxResult, windowEnd - windowStart + 1)
    }
    return maxResult
};