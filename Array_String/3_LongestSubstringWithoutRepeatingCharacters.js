/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    // a map to contain the letter
    const map = new Map();
    // with left right pointer as window
    let left = 0, right = 0, max = 0;

    // keep moving right until we found in map and start to slide left
    while (right < s.length) {
        const letter = s[right];
        if (map.has(letter)) {
            // if found in map we slide from left and increase left
            map.delete(s[left]);
            left++
        } else {
            // if no found in map we will add into map and increase right pointer
            map.set(letter, right);
            // we will update the max size here by each time new found
            max = Math.max(max, right - left + 1);
            right++
        }
    }
    return max
}