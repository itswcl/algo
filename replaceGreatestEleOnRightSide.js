/**
 * @param {number[]} arr
 * @return {number[]}
 * [17, 18, 4, 5, 6, 1]
 */
var replaceElements = function (arr) {
    // length
    const n = arr.length; // 6
    // default max is the start point n - 1;
    let max = arr[n - 1]; // max = arr[5] = 1 > 6

    // start from default's left
    for (let i = n - 2; i >= 0; i--) {
        // each round of element as temp value
        let temp = arr[i] // temp = 6 > 5 > arr[1] = 18
        // we replace the current index of element with max value to the right
        arr[i] = max; // arr[1] = 6
        // compare max value is temp value
        max = Math.max(max, temp); // (1, 6) = 6 > (5, 6) = 6 > (18, 6) = 18
    }
    // arr[n-1] = -1;
    return arr;
};