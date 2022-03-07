/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        // declare start and end point
        // start at one because we care about the number instead of index
        let start = 1;
        let end = n;
        // if only 1 version then it's the target
        if (n === 1) { return n };

        // traverse until start greater end
        while (start <= end) {
            // find the mid version
            let mid = Math.floor((end - start) / 2 + start)

            // check if mid version is bad
            if (isBadVersion(mid)) {
                // if it's bad we need to check if it's the first element
                if (start === end) {return mid}
                // if it's not only left we set mid as new RIGHT (end)
                right = mid;
            } else {
                // if the mid is good we move left (start) close to right (end) in mid + 1 point
                left = mid + 1;
            }
        }


        // bruteforce with O
        // for (let i = 0; i <= n; i++) {
        //     if (isBadVersion(i)) {
        //         return i;
        //     }
        // }
        // return n
    };
};