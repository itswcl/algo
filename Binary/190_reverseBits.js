/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    let res = 0;

    for (let i = 0; i <= 32; i++) {
        // shift to right to compared with 0001
        // then we will get the currentBit
        let bit = (n >> i) & 1;
        // everytime update the res based the prev res and the bit left shift by 31 position minus current i
        res = res | (bit << (31 - i))
    }
    // use unsign shift to remove the negative part
    return res >>> 0;
};