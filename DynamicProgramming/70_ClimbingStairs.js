/**
 * @param {number} n
 * @return {number}
 */
// n = 1 > 1
// n = 2 > 1+1, 2
// n = 3 > 1+1+1, 1+2, 2+1
// n = 4 > 1+1+1+1, 1+1+2, 2+1+1, 2+2, 1+2+1
// n = 5 > 1+1+1+1+1, 1+1+1+2, 2+1+1+1, 1+1+2+1, 1+2+1+1, 2+2+1, 2+1+2, 1+2+2
var climbStairs = function(n) {
    // -------- recursion without memo --------
        // return climbs(0, n)

    // -------- recursion with memo --------
        // const memo = new Array(n+1)
        // return climbs(0, n, memo)

    //  -------- DP with O(n) ex Fibonacci
        let one = two = 1; // initial the last 2 step as 1
        for (let i = 0; i < n - 1; i++) { // loop thru n - 1 times => 0, 1, 2, 3
            let temp = one; // store the prev one value
            one = one + two; // update new one as one + two
            two = temp; // update the two as prev one
        }
        // return the end
        return one;
    };

    // -------- recursion without memo --------
    // const climbs = (i, n) => {
    //     if (i > n) {
    //         return 0;
    //     }
    //     if (i === n) {
    //         return 1;
    //     }
    //     return climbs(i+1, n) + climbs(i+2, n)
    // }

    // -------- recursion with memo --------
    // const climbs = (i, n, memo) => {
    //     // base case when we meet the target n return 1 else 0
    //     if (i > n) return 0
    //     if (i === n)  return 1;

    //     // every recursion we check if the result happen before
    //     if(memo[i] > 0) return memo[i];

    //     // we store every idx of recursion result
    //     // as long as we not meet the end i === n we trun memo[i] store the value

    //     memo[i] = climbs(i+1, n, memo) + climbs(i+2, n, memo)
    //     return memo[i];
    // }