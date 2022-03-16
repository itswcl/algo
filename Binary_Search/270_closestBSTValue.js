var closestValue = function (root, target) {
    // first closest is root value
    let closest = root.val;

    // as long as root true
    while (root) {
        // have a temp value to compared with closestVal
        const tempVal = root.val;

        // we compared the difference between tempVal/target and closest/target
        // whoever smaller is new closest
        closest = Math.abs(tempVal - target) < Math.abs(closest - target) ? tempVal : closest;

        // we use tempVal to determine direction
        // if target is less than tempval we go left else right
        root = target < tempVal ? root.left : root.right;
    }
    // return back the result
    return closest;

    //     while(root.right !== undefined || root.left !== undefined) {
    //         let rootDiff = Math.abs(root.val - target);
    //         let leftDiff = Infinity;
    //         let rightDiff = Infinity;

    //         if (root.left) {
    //             leftDiff = Math.abs(root.left.val - target);
    //         }

    //         if (root.right) {
    //             rightDiff = Math.abs(root.right.val - target);
    //         }

    //         if (rootDiff < leftDiff && rootDiff < rightDiff) {
    //             return root.val;
    //         } else if (leftDiff < rightDiff) {
    //             root = root.left;
    //         } else {
    //             root = root.right;
    //         }
    //     }
    //     return root.val;
};