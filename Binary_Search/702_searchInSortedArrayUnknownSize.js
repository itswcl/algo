/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 * };
 */

/**
 * @param {ArrayReader} reader
 * @param {number} target
 * @return {number}
 */
var search = function (reader, target) {
    if (reader.get(0) == target) return 0;

    // boundaries
    let left = 0, right = 1; 9889

    // find the right limit as long as less than target
    while (reader.get(right) < target) {
        // as long as we move to right, left would follow the old right point
        left = right;
        // multiple by 2 speed
        right *= 2;
    }

    // BS from the gap between the left point and the point less than target
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        let num = reader.get(mid);

        if (num === target) return mid;
        if (num < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return - 1;

    //     let left = 0;
    //     let right = reader.length;

    //     while(left < right) {
    //         let mid = left + Math.floor((right - left)/2)

    //         if (reader.get(mid) === target) return mid;

    //         if (reader.get(mid) < target) {
    //             left = mid + 1;
    //         } else {
    //             right = mid;
    //         }
    //     }
    //     return -1;
};