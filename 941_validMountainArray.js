/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
    let right = 0;
    let left = arr.length - 1;

    while (arr[right] < arr[right + 1] || arr[left - 1] > arr[left]) {
        if (arr[right] < arr[right + 1]) {
            right++;
        }

        if (arr[left - 1] > arr[left]) {
            left--;
        }
    }

    if (right !== left || right === 0 || left === arr.length - 1) {
        return false;
    }

    return true;
};