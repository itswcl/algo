/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {

    const newArr = [""];
    let res = 0;

    // initial how many word we need to check
    // 'a', 'b', 'c'
    for (let word of arr) {

        for (let i = 0; i < newArr.length; i++) {
            // each run we add the current element from new array and the current word
            const newRes = newArr[i] + word;
            // use Set it uniq new word
            const newResSet = new Set(newRes.split(""))

            // remember if set we use ".size" to check length
            // if size different means the word isn't uniq letter
            if (newRes.length !== newResSet.size) continue;

            // only push the new arr if the string is uniq letter
            newArr.push(newRes);

            // check the max size
            res = Math.max(res, newRes.length)
        }
    }
    return res;
}