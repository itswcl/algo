/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]


var groupAnagrams = function (strs) {
    const map = new Map;
    // using the str and sorted
    // O(N K log K)
    // N length of strings
    // K is max length of the inside string
    // for (let str of strs) {
    //     const sortedStr = str.split("").sort().join("");

    //     map[sortedStr] ? map[sortedStr].push(str) : map[sortedStr] = [str];
    // }

    // iterate thru the strs
    for (let str of strs) {
        // each time we'll count the letter position start from 0
        const arr = new Array(26).fill(0);
        // iterate the string
        for (let s of str) {
            // each letter we will count from 97 because of code of "a" is 97 it will give us
            // arr[0] and +1 meaning we meet the letter once
            arr[s.charCodeAt() - 97]++;
        }
        // update the arr to becomes the count key with "#" to prevent dup like "bdddddddddd","bbbbbbbbbbc" both as 1010
        const key = arr.join("#");
        // check if the key has been in map // true we add back the res // false we set it as first element
        map[key] ? map[key].push(str) : map[key] = [str]
    }
    // return the values from the map which gives us 2 dimensional array
    return Object.values(map);
}