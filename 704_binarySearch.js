/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
    // setup and reset left and right index depends comparison between target and midIdx

    let leftIdx = 0;
    let rightIdx = nums.length - 1;

    // as long as left index not crossing right index
    while (leftIdx <= rightIdx) {
        // Mid pointer between left to right
        let midPointer = Math.floor((rightIdx - leftIdx) / 2 + leftIdx)

        // end case, once mid pointer value is the target
        if (nums[midPointer] === target) return midPointer;

        // if the mid pointer value is less than target
        // meaning that the left from mid are not what we look for
        // we move our left to midpoint + 1 as new left
        if (nums[midPointer] < target) {
            leftIdx = midPointer + 1;
        // if the mid pointer value is greater than target
        // meaning that right from mid are not what we look for
        // we move our right to midpoint - 1 as new right
        } else {
            rightIdx = midPointer - 1;
        }
    }
    // if we dont find our target we return -1
    return -1
};