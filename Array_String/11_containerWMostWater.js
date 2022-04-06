/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let maxArea = 0;
    // 2 pointers
    let left = 0, right = height.length - 1;
    while (left < right) {
        const curArea = Math.min(height[left], height[right]) * (right - left)
        maxArea = Math.max(maxArea, curArea);

        // move smaller point
        if (height[left] < height[right]) {
            left++;
        } else if (height[left] > height[right]) {
            right--;
        } else {
            // if same size we can move points both side
            left++;
            right--
        }
    }
    // BF
    //     // iterate til the last of second element
    //     for (let i = 0; i < height.length - 1; i++) {
    //         const startPt = height[i];

    //         // end point aftr j
    //         for (let j = i + 1; j < height.length; j++) {
    //             const endPt = height[j];
    //             const curArea = Math.min(startPt, endPt) * (j - i);

    //             maxArea = Math.max(maxArea, curArea)
    //         }
    //     }
    return maxArea;
};