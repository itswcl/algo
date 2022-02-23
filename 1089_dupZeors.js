/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {

    // zero count
    let possibleDups = 0;
    // iterate thru the index only
    let length = arr.length - 1;

    // each time we found a 0 we decrease the length of iteration
    for (let i = 0; i <= length - possibleDups; i++) {
        if (arr[i] === 0) {

            // stop if iterate thru last element
            if (i === length - possibleDups) {
                arr[length] = 0;
                length--;
                break;
            }

            // meet 0 in array we count 1
            possibleDups++;
        }
    }

    // we start from our last index which is whatever length after dups
    let last = length - possibleDups;
    // [1, 0, 2, 3, 0, 4] took [5, 0] because 2 0s

    // iterate backward to check
    for (let i = last; i >= 0; i--) {
        // if the element is 0 we do 3 thing
        // 1. copy the 0 to index end of index
        // 2. decrease the dupCount
        // 3. whatever follows index we set 0 as well so 2 0s in
        if (arr[i] === 0) {
            // arr[1+1] = 0
            // arr[4+2] = 0
            arr[i + possibleDups] = 0;
            // dup = 0
            // dup = 1
            possibleDups--;
            // arr[1+0] = 0
            // arr[4+1] = 0
            arr[i + possibleDups] = 0;
        // if it is not 0
        // whatever current element will be from last + possibleDup
        } else {
            // arr[0+0] = arr[0] = 0
            // arr[2+1] = arr[2] = 2
            // arr[3+1] = arr[3] = 4
            // arr[5+2] = arr[5] = 4
            arr[i + possibleDups] = arr[i];
        }
    }
};