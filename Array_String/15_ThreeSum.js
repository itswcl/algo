/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const threeSum = (nums) => {
    // first sort the array
    nums.sort((a, b) => a - b)
    const res = [];

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num > 0) return res; // end function if first element is positive we wont find 0 ever

        if (i > 0 && nums[i] === nums[i - 1]) continue; // we skip the element because duplicate triplets need to avoid

        // initial left from next element and right
        let left = i + 1, right = nums.length - 1;
        while (left < right) {
            const sum = num + nums[left] + nums[right]

            // if we found our target sum
            if (sum === 0) {
                // add to result
                res.push([num, nums[left], nums[right]])

                // now we need to skip same element both left move up by 1 and right move down by 1
                while (nums[left] === nums[left + 1]) left++;
                while (nums[right] === nums[right - 1]) right--;
                // once we find the end we need to move 1 positive for both site (the while loop stop at same element)
                left++;
                right--;
            } else if (sum > 0) {
                // if sum is positive means we have larger right we need to move 1 down
                right--
            } else {
                // if sum is negative means we have smaller left we need move 1 up
                left++
            }
        }
    }
    return res;
}