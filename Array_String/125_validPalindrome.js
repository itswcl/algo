/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const isAlphNum = (code) => {
        return (code >= 48 && code <= 57) || (code >= 97 && code <= 122)
    }
    const newS = s.toLowerCase()
    let left = 0, right = newS.length - 1;

    while (left < right) {
        const leftCode = newS.charCodeAt(left)
        const rightCode = newS.charCodeAt(right)

        if (!isAlphNum(leftCode)) {
            left++
            continue;
        }

        if (!isAlphNum(rightCode)) {
            right--
            continue;
        }

        if (newS[left] !== newS[right]) return false;
        left++;
        right--;
    }
    return true;
};