palindrome = function(s) {
    for (let i = 0; i < Math.floor(s.length / 2) ;i++) {
        if (s[i] !== s[s.length - i - 1]) {
            return false;
        }
    }
    return true;
}

longestPalindrome=function(s){
    //your code here
    if (s.length === 0) return 0;

    let words = s.split(' ');
    let highestCount = 1;

    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        for (let j = 0; j < word.length; j++) {
            for (let k = j + 1; k < word.length; k++) {
                const letterCombine = word.substring(j, k + 1)
                if (palindrome(letterCombine) && letterCombine.length > highestCount) {

                    highestCount = letterCombine.length;
                }
            }
        }
    }
    return highestCount
}