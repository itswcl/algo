/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    // initial first and sec number as the calculation position
    let firstNum, secNum;
    // initial the stack for contain number
    const stack = [];

    // initial action by signs
    const eval = {
        "+": () => firstNum + secNum,
        "-": () => firstNum - secNum,
        "*": () => firstNum * secNum,
        // remember to use Math.trunc to trim the decimal place
        "/": () => Math.trunc(firstNum / secNum),
    }

    // iterate each token
    for (let token of tokens) {
        if (eval[token]) {
            // when we find the sign based on sign table
            // we will get the numbers from end of stack
            // first nubmer pop will be the sec postion
            secNum = stack.pop();
            // second pop will be the first position
            firstNum = stack.pop();

            // then we fire the function by calling table[key]()
            stack.push(eval[token]())
        } else {
            // if not sign it is the token of number
            // remember to update token to number because it's string
            stack.push(Number(token))
        }
    }
    // return result as index 0 because it's 1 element in the stack
    return stack[0]
};