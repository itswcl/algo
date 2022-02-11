
var checkInclusion = function(s1, s2) {
    // set the letter map from s1
    const str1Map = {};
    const str1Length = s1.length;
    for (let i = 0 ; i < str1Length; i++) {
        const letter = s1[i];
        str1Map[letter] = (str1Map[letter] || 0) + 1;
    }

    // track MatchMap for str2 and match with str1Map
    const matchMap = {};
    const str2Length = s2.length;

    // slide window with pointer
    let left = 0;
    let right = 0;

    // checking til we meet the entire s2
    while (right < str2Length) {
        const letterS2 = s2[right]
        // building the map
        matchMap[letterS2] = (matchMap[letterS2] || 0) + 1;

        // now we compare if it exist in str1Map or more than S1
        while(matchMap[letterS2] > (str1Map[letterS2] || 0)) {
            // we will deduct count by 1
            matchMap[s2[left]]-=1;
            // raise the left pointer
            left++;
        }

        // if we get the length from right and left then it is true and early exist
        if (right - left + 1 === str1Length) return true;

        // if not meet yet we raise right pointer
        right++
    }
    return false;
};

console.log(checkInclusion("aba", "eidabbaooo"));