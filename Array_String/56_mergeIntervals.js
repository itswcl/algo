/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    // initial the result with first interval
    const mergeIntervals = [intervals[0]]

    // start from index 1
    for (let i = 1; i < intervals.length; i++) {
        const currentInt = intervals[i]
        const previous = mergeIntervals[mergeIntervals.length - 1]
        // initial end from pervious interval
        const end1 = previous[1]
        const start2 = currentInt[0];
        const end2 = currentInt[1];

        // if pervious the end greater or equal to current start [1,3], [2,6] 3 > 2
        if (end1 >= start2) {
            // update the pervios with greater end
            previous[1] = Math.max(end1, end2)
        } else {
            // if no intervine we push the current
            mergeIntervals.push(currentInt)
        }
    }
    return mergeIntervals
};