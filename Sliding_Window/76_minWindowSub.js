/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// Input: s = "ADOBECODEBANC", t = "ABC"

var minWindow = function (s, t) {
    // min as result and we need to have left and right pointer
    // right start from -1 as first iterate we check idx 0
    let min = "", left = 0, right = -1;

    // build the map for the sub char from t
    let map = {};
    for (let char of t) map[char] ? map[char]++ : map[char] = 1;

    // set default count based on the keys we have in map
    let count = Object.keys(map).length;

    // now iterate til we out of length based on right pointer
    while (right <= s.length) {

        // when count is 0 means we have 0 char in the map
        if (count === 0) {
            // each time we move our left pointer when count still 0
            let current = s[left];
            // if the target not 0 we increase the count
            if (map[current] !== undefined) map[current]++;
            if (map[current] > 0) count++;

            // each time compared the substring to see if lesser than prev sub
            let temp = s.substring(left, right + 1)
            // first time we update min as our temp
            min === ""
                ? min = temp
                // after first time we check the length from min and temp and pick whoever smaller
                : min = min.length < temp.length ? min : temp;

            // increase our left pointer
            left++
        } else {
            // right pointer and decrease from map
            right++;
            // find current letter
            let current = s[right];

            // check 2 thing
            // 1. if in the map we decrease by 1
            if (map[current] !== undefined) map[current]--;

            // and check if we have 0 after drcrease by 1
            if (map[current] === 0) count--;
        }
    }
    return min;
};