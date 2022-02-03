/*
 ██╗ ██╗
████████╗
╚██╔═██╔╝
████████╗
╚██╔═██╔╝
 ╚═╝ ╚═╝

    Given two 🎻 strings S and T containing only lowercase letters and "#" characters,
    return if they are equal when both are typed into empty text editors.
    👉 '#' character means a 'backspace' character.
    i.e., after processing the backspaces, are the two strings equal?
    Ninja Bonus: solve in O(n) time
*/

const S1 = "ab#c";
// a -> ab -> a -> ac
//          v
const T1 = "ad#c";
// a -> ad -> a -> ac
const expected1 = true;
// Explanation: Both S and T become "ac"

//          v
const S2 = "ab##";
// a -> ab -> a -> ""
const T2 = "c#d#";
// c -> "" -> d -> ""
const expected2 = true;
// Explanation: Both S and T become ""

const S3 = "a##c";
// a -> "" -> "" -> c
const T3 = "#a#c";
// "" -> a -> "" -> c
const expected3 = true;
// Explanation: Both S and T become "c"

const S4 = "a#c";
// a -> "" -> c
const T4 = "b";
// b
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".

function backspaceStringCompare(S, T) {
    return removeHashTags(S) == removeHashTags(T)

}

function removeHashTags(str) {
    let arr = []
    for (char of str) {
        if (char != "#") {
            arr.push(char)
        }
        else {
            arr.pop()
        }
    }
    let result = ""
    for (char of arr) {
        result += char
    }
    return result
}

console.log(backspaceStringCompare(S1, T1))
// console.log(backspaceStringCompare(S2, T2))
// console.log(backspaceStringCompare(S3, T3))
// console.log(backspaceStringCompare(S4, T4))