/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
    // setup and reset left and right index depends compareson between target and midIdx

    let leftIdx = 0;
    let rightIdx = nums.length - 1;

    while (leftIdx <= rightIdx) {
        let midIdx = Math.floor((rightIdx - leftIdx) / 2 + leftIdx)

        if (nums[midIdx] === target) return midIdx;

        if (nums[midIdx] < target) {
            leftIdx = midIdx + 1;
        } else {
            rightIdx = midIdx - 1;
        }
    }
    return -1
};