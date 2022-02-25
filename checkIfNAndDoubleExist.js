/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
    const numberTable = {};

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i]

        if (!numberTable[num]) {
            // if no pair in table adding it
            // first time 0 will be {0, 1}
            numberTable[num] = 1;

        } else if (numberTable[num] && num !== 0) {
            // if pair in table but 0 we increase 1
            numberTable[num]++;

        } else {
            // if pair of 0 in table already we can return true
            // because 0 * 0 is n and double
            return true;
        }


        if ((numberTable[num * 2] !== undefined || numberTable[num / 2] !== undefined) && num !== 0) {
            // check if num * 2 or num / 2 exist in table yet
            // num is 0 into this condition
            return true;
        }


    }
    return false;
};