/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    let count = 0;
    while (n) {
        /*
        n = 10000001 & 10000000 > 10000000
        n = 10000000 & 01111111 > 00000000
        n =

        */
        console.log(n)
        console.log(n - 1)
        n = n & (n - 1);
        count++
        // count += n % 2;
        // n = n >> 1;
    }
    return count;
};