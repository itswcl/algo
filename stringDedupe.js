/*
Given a string,
return a new string with the duplicates excluded
Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

function stringDedupe(str) {
    // setup
    var res = "";
    // work
    // iterate thru str
    for (var i = 0; i < str.length; i++) {
        // check if res has the element already
        if (!res.includes(str[i])) {
            // no element we add to res
            res += str[i];
        }
    }
    // result
    return res;
}

/*****************************************************************************/

/*
Given a string containing space separated words
Reverse each word in the string.
If you need to, use .split to start, then try to do it without.
*/

const str1 = "hello";
const expected1 = "olleh";

const str2 = "hello world";
const expected2 = "olleh dlrow";

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";

/*
* Reverses the letters in each words in the given space separated
* string of words. Does NOT reverse the order of the words themselves.
*/
function reverseWords(str) {
    // setup
    // split into array
    var arr = str.split(' ')
    // empty array for return word
    var resArr = []
    // work
    // iterate thru words array
    for (var i = 0; i < arr.length; i++) {
        // set temp str to store reverse word
        tempWord = ''
        // iterate thru the word
        for (var j = arr[i].length - 1; j >= 0; j--) {
            // store the reverse element to temp word
            tempWord += arr[i][j]
        }
    // after reverse the word we adding to result array
    resArr.push(tempWord)
    }
    // result
    // result in array and join with space as statement
    return resArr.join(' ')
}