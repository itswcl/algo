/**
 * @param {number[]} prices
 * @return {number}
 */
 const maxProfit = function(prices) {

    // default a smallest number and difference
    let smallest = prices[0];               // 7 > 1
    let diff = prices[0] - prices[1];       // 6 > -4
    // iterate thru prices array
    for (let i = 1; i < prices.length; i++) {
        // while traverse we compare "smallest" and "difference"
        if (smallest > prices[i]) {         // 1 > 5
            smallest = prices[i]            //
        }
        // smallest = Math.min(smallest, prices[i])
        // find the biggest difference
        if (diff > smallest - prices[i]) {  // -4 > 0
            diff = smallest - prices[i]     // -4
        }
        // diff = Math.min(diff, smallest - prices[i])

    }
    // if diff is NaN means only 1 or non number in prices
    if (!diff) {
        // will be 0 profit
        return 0;
    } else {
        // if we find the smallest and move forward with largest we return - (diff) because small - large is negative
        return -diff
    }
};