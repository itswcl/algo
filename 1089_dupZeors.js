/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {

    let possibleDups = 0;
    let length = arr.length - 1;

    //
    for (let i = 0; i <= length - possibleDups; i++) {
        if (arr[i] === 0) {

            if (i === length - possibleDups) {
                arr[length] = 0;
                length--;
                break;
            }
            possibleDups++;
        }
    }

    let last = length - possibleDups;

    for (let i = last; i >= 0; i--) {
        if (arr[i] === 0) {
            arr[i + possibleDups] = 0;
            possibleDups--;
            arr[i + possibleDups] = 0;
        } else {
            arr[i + possibleDups] = arr[i];
        }
    }
};