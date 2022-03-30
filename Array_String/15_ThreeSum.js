/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const threeSum = (nums) => {
    // sort the numbers
    nums.sort((a, b) => a - b);
    const res = [];
    // need at least 2 numbers so length - 2
    for (let i = 0; i < nums.length - 2; i++) {
        const num = nums[i]
        // num positive so no need to check the rest
        if (num > 0) return res;
        // need at least run once and check current and pervious then we skip
        if (i > 0 && num === nums[i - 1]) continue;

        // run the twoSum pointers here
        // start from i + 1 because it's sorted
        let left = i + 1, right = nums.length - 1
        while (left < right) {
            const sum = num + nums[left] + nums[right]
            if (sum === 0) {
                // if we meet the target
                // 1. push the target numbers into result arr
                res.push([num, nums[left], nums[right]])
                // 2. update the pointers left and right
                    // 1. check the next left if same then skip
                while(nums[left] === nums[left + 1]) left++;
                    // 2. check the next right if same then skip
                while(nums[right] === nums[right - 1]) right--;
                // otherwise left increase by 1 and right decrease by 1
                left++;
                right--;
            } else if (sum > 0) {
                // greater than target so right too big
                right--;
            } else {
                // lesser than target so left too small
                left++;
            }
        }
    }
    return res;
}