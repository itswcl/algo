# pre-processing
# binary search
# post processing

## template I
```js
let left = 0; let right = nums.length - 1;
while (left <= right) {
    let mid = Math.floor((right - left) / 2 + left)

    if (nums[mid] === target) return mid;
    if (nums[mid] < target) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}
```