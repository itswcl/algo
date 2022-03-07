# pre-processing
    - sort
# binary search
    - loop or recursion to divide search space in half in each comparison
# post processing
    - viable candidates in remaining space

# template I
    - initial condition, left = 0 right = length - 1
    - termination left > right
    - searching left, right = mid - 1
    - searching right, left = mid + 1
### Sqrt(x), guess number higher or lower, search in rotated sorted array
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