/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
const findClosestElements = (arr, k, x) => { // [1,2,3,4,5] k = 4, x = 3
    // initial left and right
    // right to k element
    let left = 0
    // right = 5 - 4 = 1
    let right = arr.length - k;

    while (left < right) { // 0 < 1
        const mid = left + Math.floor((right - left) / 2); // 0

        // (3 - arr[0]) > arr[0+4] - 3)
        // (3 - 1) > (5 - 3)
        // 2 > 2

        if (x - arr[mid] > arr[mid + k] - x) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    const result = new Array();
    for (let i = left; i < left + k; i++) {
        result.push(arr[i]);
    }
    return result;
};