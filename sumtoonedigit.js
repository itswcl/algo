/*
  Sum To One Digit
  Implement a function sumToOne(num)​ that,
  given a number, sums that number’s digits
  repeatedly until the sum is only one digit. Return
  that final one digit result.
  Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/

const num1 = 5;
const expected1 = 5;

const num2 = 10;
const expected2 = 1;

const num3 = 25;
const expected3 = 7;

/**
 * Sums the given number's digits until the number becomes one digit.
 * @param {number} num The number to sum to one digit.
 * @returns {number} One digit.
 */
 function sumToOneDigit(num) {
    // let numbers = num.toString()

    if (num < 10) {
        return num
    } else {
        console.log("here" + sumToOneDigit(num / 10))
        // return numbers[numbers.length - 1] + sumToOneDigit(numbers.slice(0))
        return sumToOneDigit(num % 10 + sumToOneDigit(Math.floor(num / 10)))
    }
}

function sumAllDigit(num) {
    if (num < 10) {
        return num;
    } else {
        return (n % 10 + sumAllDigit(Math.floor(n / 10)))
    }
}

/*****************************************************************************/

/*
  String Anagrams
  Given a string,
  return array where each element is a string representing a different anagram (a different sequence of the letters in that string).
  Ok to use built in methods
*/

const str1 = "lim";
const expected1 = ["ilm", "iml", "lim", "lmi", "mil", "mli"];
// Order of the output array does not matter

/**
 * Add params if needed for recursion.
 * Generates all anagrams of the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {Array<string>} All anagrams of the given str.
 */
function generateAnagrams(str) {
    if (str.length <= 1) return str;

    let anagrams = [];

    for (let i = 0; i < str.length; i++) {
        const currentLetter = str[i];
        const remindLetter = str.slice(0, i) + str.slice(i+1)

        const anagramsOnRemindLetter = generateAnagrams(remindLetter)

        anagramsOnRemindLetter.forEach(subAnagrams => {
            anagrams.push(currentLetter + subAnagrams)
        })
    }
    return all
}

function generateAnagrams2(str, solutions = [], partial = "") {
    if (!str) {
        solutions.push(partial);
        console.log("pushing to solution")
    }

    for (let i = 0; i < str.length; i++) {
        // remove single letter from remaining letters
        // add it to end of solutionInProgress
        const leftSlice = str.slice(0, i);
        const rightSlice = str.slice(i + 1); // skips current letter
        const remainingLetters = leftSlice + rightSlice;
        const solutionInProgress = partial + str[i];
        //console.log (`Call to gA(${remainingLetters}, [${solutions}], ${solutionInProgress})`)
        generateAnagrams(remainingLetters, solutions, solutionInProgress );
    }
    return solutions;
}