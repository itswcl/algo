/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
// [-1, 3, 2, -3]
var asteroidCollision = function (asteroids) {
    // initial the stack
    let stack = []; // -> [-1, 3, 2]

    // tervese the asteroids
    for (let i = 0; i < asteroids.length; i++) {
        let asteroid = asteroids[i];

        // check the dirrection
        // if the asteriod and going left(negative) and the current top is going right(positive)
        // only do the work when asteroid going left and last ast going right
        while (stack && asteroid < 0 && stack[stack.length - 1] > 0) {
            // current is negative minus current top
            // negative then left greater, positive then right greater, is 0 then both same
            let diff = asteroid + stack[stack.length - 1]
            // -3 + 3 = 0

            if (diff < 0) {
                // negative then pop the top
                stack.pop()
            } else if (diff > 0) {
                asteroid = 0;
            } else {
                // if asteroid and last top diff is 0
                // we will remove the top and current asteroid
                stack.pop()
                asteroid = 0;
            }
        }

        if (asteroid) stack.push(asteroid);

    }

    return stack;
};