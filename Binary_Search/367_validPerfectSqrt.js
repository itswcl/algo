/**
 * @param {number} num
 * @return {boolean}
 */

const isPerfectSqrt = (num) => {
    // 0 and 1 are true
    if (num < 2) return true;

    // set left and right from 2 to num / 2
    let left = 2, right = num / 2;
    // loop thru the nums
    while (left <= right) {
        // find mid point and sqrt mid
        let mid = left + Math.floor((right - left) / 2);
        let sqrtMid = mid * mid;

        // if sqrtmid is the num we found
        if (sqrtMid === num) return true;

        // if sqrtMid greater than num
        // we have higher false target we need to update our right point
        if (sqrtMid > num) {
            right = mid - 1;
        // if we have lesser false target we need to move our left up;
        } else {
            left = mid + 1;
        }
    }
    return false;
}