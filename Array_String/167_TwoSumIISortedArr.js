/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    // two pointers from left and right
    let left = 0, right = numbers.length - 1

    // loop til find the target or left out of right
    while (left < right) {
        // let numLeft = numbers[left], numRight = numbers[right];
        // initial sum
        const sum = numbers[left] + numbers[right];

        // compared if we meet the target
        if (sum === target) return [left + 1, right + 1];

        // if sum larger than target means we have larger number on right way
        if (sum > target) {
            // decrement the right pointer
            right--
        } else {
            // if sum smaller than target means we have lesser number on left way
            left++
        }
    }
};