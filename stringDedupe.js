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
    var res = "";

    for (var i = 0; i < str.length; i++) {
        if (!res.includes(str[i])) {
            res += str[i];
        }
    }
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
    var arr = str.split(' ')
    var res = ""

    for (var i = 0; i < arr.length; i++) {

        for (var j = arr[i].length - 1; j >= 0; j--) {
            res += arr[i][j]
        }
        res += ' '
    }
    return res;
}