/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    return s.split("").sort().join("") === t.split("").sort().join("");
// -----------------------------------------------------------------------------

    // // if length differ then it's not anagram
    // if (s.length !== t.length) return false;

    // // default a hashmap to create letter counter from string s
    // let map = {};
    // for (let string of s) map[string] ? map[string]++ : map[string] = 1;

    // for (let string of t) {
    //     // if the letter not in map then it is not anagram
    //     if (!map[string]) return false;
    //     // then we start to decrementing each letter from string t
    //     map[string]--
    // }

    // return true;
// -----------------------------------------------------------------------------
    //     const letterMap = {}
    //     const st = s + t
    //     if (s.length !== t.length) return false;

    //     for (let i = 0; i < st.length; i++) {
    //         const letter = st[i];

    //         if (i < s.length) {
    //             letterMap[letter]
    //                 ? letterMap[letter] += 1
    //                 : letterMap[letter] = 1
    //         } else {
    //             letterMap[letter]
    //                 ? letterMap[letter] -= 1
    //                 : false;
    //         }
    //     }
    //     for (letter in letterMap) {
    //         if (letterMap[letter] !== 0) return false;
    //     }
    //     return true;
    //     // hashmap
    //     const letterDic = {}
    //     let flag = true
    //     // combine both s and t string
    //     if (s.length !== t.length) return false;

};