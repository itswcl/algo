/**
 * @param {number} n
 * @return {number[]}
 */
// [0]
// [-1,1]
// [-1, 0, 1]
// [-2, -1, 1, 2]
// [-2, -1, 0, 1, 2]
var sumZero = function (n) {
    // result array
    // if odd we need element 0, index not matter
    const result = n % 2 === 1 ? [0] : []

    // we only need n / 2 number [-1, 1] / [-2, -1, 1, 2]
    for (let i = 1; i <= Math.floor(n / 2); i++) {
        result.push(i, -i);
    }


    return result
};