/*
  Interview Question:
  Given a string
  return whether or not it's possible to make a palindrome out of the string's characters
  What is it about a string that makes it possible for it to be a palindrome?
  Determine whether or not it is possible for the string's characters to be
  rearranged into a palindrome.
*/

// racecar


const str1 = "";
const expected1 = false;

const str2 = "a";
const expected2 = true;

const str3 = "ddaa";
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

//            V
const str5 = "aaadd";
const expected5 = true;
// Explanation: "daaad"


// check length?
// {
//     a: 3,
//     d: 2
// }
// for in
// is Odd flag?
// check odds/even? length?


const str6 = "abc";
const expected6 = false;

/*
  For a string to be able to be re-ordered into a palindrome
  It must have an even occurrence of every character
  Unless it is odd length, then it can have 1 character that
  can have an odd number of occurrences.
  Another way to look at it would be, if you cancel out ever char that has a pair,
  it can be a palindrome if you are left with 0 or 1 char remaining:
    - "dad" the "d" cancels with itself to leave "a"
    - "daad" the "d" and "a" cancel with itself to leave nothing
    - "daam" the "a" cancels with itself leaving "dm", more than 1 char remaining, can't be palindrome
*/

function canBecomePalindrome(str) {
  // if empty false
  if (str.length === 0) return false;
  // if 1 letter true
  // if (str.length === 1) return true;

  // letter count
  let strMap = {};

  // get the count of letter with odd/even check
  for (let i = 0; i < str.length; i++) {
    // letter as key in strMap
    const letter = str[i]
    // check if exist
    if (strMap[letter]) {
      // exist value + 1 and modulo to have even/odd number check
      strMap[letter] = (strMap[letter] + 1) % 2
    } else {
      // no exist we put value as 1
      strMap[letter] = 1;
    }
  }
  // if str length is even number
  if (str.length % 2 === 0) {
    // go thru strMap
    for (const key in strMap) {
      // as long as 1 One's it is not palindrome
      if (strMap[key] === 1) return false;
    }
    // all 0s it is palindrome
    return true;
  } else {
    // if str length is odd, set the total for values in the map
    let total = 0
    // go thru the strMap
    for (const key in strMap) {
      // if the values is One we add up
      if (strMap[key] === 1) {
        total++
      }
    }
    // if total is NOT 1 then it is not palindrome
    return total === 1;
  }

}

console.log(canBecomePalindrome(str1));
console.log(canBecomePalindrome(str2));
console.log(canBecomePalindrome(str3));
console.log(canBecomePalindrome(str4));
console.log(canBecomePalindrome(str5));
console.log(canBecomePalindrome('aabbccdeaade'));

// console.log(canBecomePalindrome(str1) === expected1); // false
// console.log(canBecomePalindrome(str2) === expected2); // true
// console.log(canBecomePalindrome(str3) === expected3); // true
// console.log(canBecomePalindrome(str4) === expected4); // true
// console.log(canBecomePalindrome(str5) === expected5); // true