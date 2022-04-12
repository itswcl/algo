/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    const operates = ['+', '-', '*', '/'];
    let operate = '+';
    let curNum = '';
    let stack = [];

    for (let char of s) {
        // meet the signs we do the calculate based on current operate sign
        if (operates.includes(char)) {
            // if + or - just push the number with sign
            if (operate === '+') stack.push(parseInt(curNum))
            else if (operate === '-') stack.push(-parseInt(curNum))
            // if * or / the first number will be the stack pop then * or / the current Num
            else if (operate === '*') stack.push(stack.pop() * parseInt(curNum))
            else stack.push(Math.trunc(stack.pop() / parseInt(curNum)))

            // the operation finished we reset the curNum and operate sign
            curNum = '';
            // update next operate
            operate = char;
        } else {
            // number concat to current
            curNum += char;
        }
    }
    // after iterate the curNum still not clear out with the operation
    // we need to parse the number with current operation and put into the stack
    // if + or - just push the number with sign
    if (operate === '+') stack.push(parseInt(curNum))
    else if (operate === '-') stack.push(-parseInt(curNum))
    // if * or / the first number will be the stack pop then * or / the current Num
    else if (operate === '*') stack.push(stack.pop() * parseInt(curNum))
    else stack.push(Math.trunc(stack.pop() / parseInt(curNum)))

    let res = 0;
    for (let i of stack) { res += i }
    return res;
};