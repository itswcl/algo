/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let aShort = nums1; let bLong = nums2;
    // A for short Array and B for longer one
    if (aShort.length > bLong.length) [aShort, bLong] = [bLong, aShort];

    const totalLength = nums1.length + nums2.length; // cal total length of arrays
    const half = Math.floor(totalLength / 2)         // half of element in total

    // initial left and right for short Array
    let left = 0; let right = aShort.length - 1;

    // keep running true because we always return the value to stop the loop
    while (true) {

        // mid point for short array
        let indexShort = Math.floor((left + right) / 2);
        // half of index deduct whatever we took from short array
        let indexLong = half - indexShort - 2;

        // at least mid index 0 or smallest point negative infinity
        const aLeft = indexShort >= 0 ? aShort[indexShort] : -Infinity;
        // make sure we have always right, if none or 1 element then right is Infinity
        const aRight = indexShort + 1 < aShort.length ? aShort[indexShort + 1] : Infinity;

        // left at least 0 or smallest point
        const bLeft = indexLong >= 0 ? bLong[indexLong] : -Infinity;
        // right at least 1 then largest point infinity
        const bRight = indexLong + 1 < bLong.length ? bLong[indexLong + 1] : Infinity;

        // left partition from short is less than right partition from long
        // left partition from long is less than right partition from short
        if (aLeft <= bRight && bLeft <= aRight) {
            if (totalLength % 2 === 1) {
                // if is odd total length we found the mid by min from short and long
                // partition from right
                return Math.min(aRight, bRight)
            } else {
                // even
                // we found the max from both left partition and min from both right partition
                // then divide by 2
                return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2
            }
        // if either left partition greater than right
        // we move the short array pointer
        } else if (aLeft > bRight) {
            // if short left is greater than long right
            // we shirk the short by right as mid - 1
            right = indexShort - 1;
        } else {
            // if short left is less than long right
            // we expand the range from short by mid + 1
            left = indexShort + 1;
        }
    }

};