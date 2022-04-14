/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    // initial sign with 1 as positive number and -1 as negative
    let sign = 1, sum = 0
    // initial stack for the (1+1) case
    const stack = [];

    // iterate thru the string find number and sign
    for (let i = 0; i < s.length; i++) {
        if (s[i] >= '0' && s[i] <= '9') {
            // initial number
            let num = 0;

            // the while loop to create the digit number based on increase of i
            while (s[i] >= '0' && s[i] <= '9') {
                // first run will be sigle digit due to num = 0 * 10
                // when next number come it will be whatever pervious digit * 10 + current num
                num = (num * 10) + (s[i] - '0');
                i++
            }
            // after iterate thru "nums" we sum up
            sum += num * sign
            // decrease by 1 because it stop at the sign which for next action
            i--
            // we update the + and - as 1 with -1
        } else if (s[i] === '+') {
            sign = 1;
        } else if (s[i] === '-') {
            sign = -1
            // when meet open parathese we input into the stack as container for 1. sum 2. sign
        } else if (s[i] === '(') {
            stack.push(sum);
            stack.push(sign);
            // reset the num and sign to default
            sum = 0;
            sign = 1;
            // when meet the close parathese we take the current sum to update sign and pervious sum
        } else if (s[i] === ')') {
            sum *= stack.pop();
            sum += stack.pop();
        }
    }
    return sum;
};