/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

const myPow = (x, n) => {
    // // 1. recursion / slow need to update run time
    // if (n === 0) return 1;
    // if (n === 1) return x;
    // if (n < 0) return 1 / myPow(x, Math.abs(n))
    // return myPow(x, n - 1)

    // // 2. recursion
    // if (n === 0) return 1;
    // if (n === 1) return x;
    // if (n < 0) return 1 / myPow(x, Math.abs(n))
    // // add more condition for even of n we reduce the n by divide 2 and increase x by x times
    // if (n % 2 === 0) return myPow(x * x, n / 2)
    // return myPow(x, n - 1)

    // 3. iterate
    let powNum = 1;
    // check negative n as x = 1/x n = abs(n)
    if (n < 0) {
        x = 1 / x;
        n = Math.abs(n)
    }

    while (n > 0) {
        if (n % 2 === 1) res = res * x;
        // same as recursion 2 as we increase x by times x and decrease n by divide by 2
        x = x * x;
        n = Math.floor(n / 2)
    }
    return powNum;
}