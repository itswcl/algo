/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    // initial result, stack
    let result = 0;
    const stack = [];

    // go thru the heights
    for (let i = 0; i < height.length; i++) {
        const current = height[i]

        // check if stack not empty and current number is greater than perv
        while (stack && current > height[stack[stack.length - 1]]) {
            // if so there's gap between current and before prev
            // we find our midIdx and take out from stack
            const midIdx = stack.pop()

            // make sure the stack not empty after pop
            if (stack.length === 0) break;

            // get our prevIdx
            const prevIdx = stack[stack.length - 1]
            // calculate the gap from current to prevIdx
            const distance = i - prevIdx - 1;
            // get the hight from min height minus  middle gap
            const hight = Math.min(current, height[prevIdx]) - height[midIdx];
            // add the gap area to result
            result += distance * hight;
        }

        // push the index in to stack
        stack.push(i);
    }
    return result;

    // // timeout due to o(n2)
    // let maxResult = 0;

    // // empty return no
    // if (!height) return maxResult;

    // for (let i = 0; i < height.length; i++) {
    //     // iterate thru height and find max of left and right
    //     let leftMax = 0;
    //     let rightMax = 0;

    //     for (let j = 0; j < i; j++) {
    //         leftMax = Math.max(leftMax, height[j])
    //     }

    //     for (let j = i + 1; j < height.length; j++) {
    //         rightMax = Math.max(rightMax, height[j]);
    //     }

    //     // find the water min minus current height if possitive then water contain
    //     const water = Math.min(leftMax, rightMax) - height[i];
    //     // add them up
    //     if (water > 0) maxResult += water;
    // }
    // // return waters
    // return maxResult
};