// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
/**
 * @param {number} num
 * @return {number}
*/
/*
input number = 1234
output = 1
process
1234 --> 1+2+3+4 = 10
10   --> 1+0     = 1
1 is one digit then return
*/
const addDigits = function (num) {
    // base case if single digit
    if (num < 10) { return num }; // O(1)

    // turn number into array of numbers
    const numbers = (num + "").split("") // O(n)
    // set the total for each num1ber to add up
    let total = 0; // O(1)
    // traverse  numbers to sum number
    for (let i = 0; i < numbers.length; i++) { // O(n)
        total += parseInt(numbers[i]); // O(n)
    }

    // if number less than 10
    if (total < 10) {
        // get the result
        return total;
    } else {
        // greater than 10 run function again
        return addDigits(total);
    }
};

