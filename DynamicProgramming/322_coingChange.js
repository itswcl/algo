/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    // the reason of amount + 1 because we want to contain the base case of 0
    let dp = new Array(amount + 1).fill(amount + 1)
    // the base case is dp[0] = 0
    dp[0] = 0;
    // console.log(dp)

    // now we update each idx of dp
    for (let i = 1; i <= amount; i++) {

        // in each of idx we will check every coin
        for (let coin of coins) {
            // as long as the idx greater than coin we will update the dp[idx]
            if (i - coin >= 0) {
                // we will compared the current with 1+dp[idx] whoever smaller
                // let's say idx of 6 - coin is 5 we will get 1 + dp[1]
                dp[i] = Math.min(dp[i], 1 + dp[i - coin])

            }
        }
        // console.log(`DP[${i}] = ${dp[i]}`)
    }
    // if the last of idx still same as we asign which isn't update
    // we will get -1
    // else the dp[amount] value
    return dp[amount] === amount + 1 ? -1 : dp[amount];
};