/**
 * @param {string[]} logs
 * @return {number}
 */
const minOperations = function (logs) {
    // counter for each up / down / stay
    let count = 0;

    // iterate each element
    for (let i = 0; i < logs.length; i++) { // O(n)
        // get first char and second char each time
        const log = logs[i]
        const firstChar = log[0]
        const secondChar = log[1]

        // compare if first not dot we can assume it's letter
        if (firstChar !== ".") {
            // we add 1 layer
            count++
            // compare first and second both dot and at least layer 0
        } else if (firstChar === "." && secondChar === "." && count > 0) {
            // we deduct 1 layer
            count--
        }

    }
    // return total layer
    return count;
};

minOperations(["d1/","d2/","../","d21/","./"])
minOperations(["d1/","../","../","../"])
