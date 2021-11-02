/*
Given in an alumni interview in 2021.
String Encode
You are given a string that may contain sequences of consecutive characters.
Create a function to shorten a string by including the character,
then the number of times it appears.


If final result is not shorter (such as "bb" => "b2" ),
return the original string.
*/

// const str1 = "aaaabbcddd";
// const expected1 = "a4b2c1d3";

// const str2 = "";
// const expected2 = "";

// const str3 = "a";
// const expected3 = "a";

// const str4 = "bbcc";
// const expected4 = "bbcc";


function encodeStr(str) {
    // SETUP
    // hold the str we build
    var result = "";
    // variable that store the current char hte str
    var currentChar = "";
    // variable to hold the count of char

    // WORK
    // loop thru the str
    for (var i = 0; i < str.length; i++) {
        // compare the currCharVariable to the char at the current index in the string match
        currentChar = str[i];
        counter = 1;
            // if same, increase the counter of variable
            while (currentChar === str[i + 1]) {
                counter++
                i++
            }

            result += currentChar + counter;
        // compare the currCharVariable to the char at the current index in the string but NOT match
            // add the currCharVariable to the result str
            // reset the count
            // set the currCharVariable to the next letter
    }

    // RETURN
    // compare the length of the encoded str to the original
    if (result.length < str.length) {
        return result;
    } else {
        return str;
    }
        // if encoded is short return encoded
        // not short return original
}
// console.log(encodeStr(str1));
// console.log(encodeStr(str2));
// console.log(encodeStr(str3));
// console.log(encodeStr(str4));


/*****************************************************************************/

/*
String Decode
*/

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

const str2 = "a3b2c12d10";
const expected2 = "aaabbccccccccccccdddddddddd";


// // Decodes the given string by duplicating each character by the following int
// // amount if there is an int after the character.

function isLetter(letter) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";

    for (var j = 0; j < alphabet.length; j++) {
        if (alphabet[j] === letter) {
            return true;
        }
    }
    return false
}

function decodeStr(str) {
    // SETUP
    var result = ""
    // decoded string variable

    // WORK
    // loop through the string
    for (var i = 0; i < str.length; i++) {
        var currentVar = str[i]
        var numStr = "";
        // we can use a loop to add characters to the decoded string the num amount of times
        while (!isLetter(str[i+1])&&i<str.length-1) {
            numStr += str[i+1]
            //console.log(numStr)
            i++
        }
        var appendMe = ''
        //creating append me
        for(j=0;j<parseInt(numStr);j++){
            appendMe+=currentVar
        }
        result += appendMe
        //console.log(result)
    }
    // RETURN
    // returning the decoded string
    return result;
}

function decodeStr(str) {
    var decoded = "";
    var numStr = "";
    var i = 0

    while (i < str.length) {
        // want to grab the character the current index
        var letter = str[i]
        numStr = "";
        i++

        while (i < str.length && isNaN(parseInt(str[i]))) {
            numStr += str[i];
            i++
        }
        decoded += letter.repeat(numStr);
    }
    return decoded;
}