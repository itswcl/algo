/**
 * @param {number[]} heights
 * @return {number}
 */
 var largestRectangleArea = function(heights) {
    // initial maxArea
    let maxArea = 0; // 2
    // initial stack to push the height and idx in
    let stack = [];
    /*
    [
        [0, 1]
    ]
    */

    // iterate thur the height with idx
    for (let [curIdx, curHeight] of heights.entries()) {
        // initial start as curIdx position
        let start = curIdx;

        // check two thing [2, 1, 0]
        // 1. we have pervious idx and height 2. pervHeight is greater than current
        while (stack.length !== 0 && stack[stack.length - 1][1] > curHeight) {
            // prevHeight greater than current then we meet stop point
            // get the prevIdx and Height out
            const [prevIdx, prevHeight] = stack.pop();
            // calculate the max til end position
            // prevHeight * (currentPosition - prevousPosition)
            maxArea = Math.max(maxArea, prevHeight * (curIdx - prevIdx))
            // set the startPosition to prevIdx as extent the prev idx
            start = prevIdx
        }

        // push the start and curHeight in
        stack.push([start, curHeight])
    }

    // get the rest of from stack where the prev is lower than current Height
    for (let [curIdx, curHeight] of stack) {
        // calculate the area for each position
        // [1, 2, 3] >> 3 * 3 - 2 -> 3 // 2 * 3 - 1 -> 4 // 1 * 3 - 0 -> 3
        let curArea = curHeight * (heights.length - curIdx)
        maxArea = Math.max(maxArea, curArea)
    }

    return maxArea;

//     let largest = 0;

//     for (let i = 0; i < heights.length; i++) {
//         const current = heights[i];
//         largest = Math.max(largest, current);
//         let count = 1;
//         let min = current;
//         for (let j = i + 1; j < heights.length; j++) {
//             count++;
//             min = Math.min(min, heights[j])
//             largest = Math.max(largest, count * min)
//         }

//     }
//     return largest;
};/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    // initial maxArea
    let maxArea = 0; // 2
    // initial stack to push the height and idx in
    let stack = [];
    /*
    [
        [0, 1]
    ]
    */

    // iterate thur the height with idx
    for (let [curIdx, curHeight] of heights.entries()) {
        // initial start as curIdx position
        let start = curIdx;

        // check two thing [2, 1, 0]
        // 1. we have pervious idx and height 2. pervHeight is greater than current
        while (stack.length !== 0 && stack[stack.length - 1][1] > curHeight) {
            // prevHeight greater than current then we meet stop point
            // get the prevIdx and Height out
            const [prevIdx, prevHeight] = stack.pop();
            // calculate the max til end position
            // prevHeight * (currentPosition - prevousPosition)
            maxArea = Math.max(maxArea, prevHeight * (curIdx - prevIdx))
            // set the startPosition to prevIdx as extent the prev idx
            start = prevIdx
        }

        // push the start and curHeight in
        stack.push([start, curHeight])
    }

    // get the rest of from stack where the prev is lower than current Height
    for (let [curIdx, curHeight] of stack) {
        // calculate the area for each position
        // [1, 2, 3] >> 3 * 3 - 2 -> 3 // 2 * 3 - 1 -> 4 // 1 * 3 - 0 -> 3
        let curArea = curHeight * (heights.length - curIdx)
        maxArea = Math.max(maxArea, curArea)
    }

    return maxArea;

//     let largest = 0;

//     for (let i = 0; i < heights.length; i++) {
//         const current = heights[i];
//         largest = Math.max(largest, current);
//         let count = 1;
//         let min = current;
//         for (let j = i + 1; j < heights.length; j++) {
//             count++;
//             min = Math.min(min, heights[j])
//             largest = Math.max(largest, count * min)
//         }

//     }
//     return largest;
};