/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
    let tempCarry
    while (b) {
        let tempCarry = a & b;
        // each time we calculate the XOR as long as b not hitting 0 yet
        a = a ^ b;
        // calculate AND shift by 1 for carry and update the b til hits 0
        // because we want to keep bit 1,1 to 10
        // also remember to use original a because the a updated after XOR
        b = (tempCarry) << 1
    }
    return a;
};