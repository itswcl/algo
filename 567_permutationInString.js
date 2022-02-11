/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    // iterate thru s2
    for (let i = 0; i < s2.length; i++) {
        const meetPoint = s2[i]

        // if meet the letter from s1 in last element
        if (meetPoint === s1[s1.length - 1]) { // b
            let s2Idx = i + 1; // 4
            for (let j = s1.length - 2; j >= 0; j--) { // j = 0
                const letterS1 = s1[j] // a

                if (letterS1 !== s2[s2Idx]) { // a !== a
                    return false;
                }
                s2Idx++

            }
            return true

        } else if (meetPoint === s1[0]) {
            for (let j = 1; j < s1.length; j++) {
                const letterS1 = s1[j]

                let s2Idx = i + j
                if (letterS1 !== s2[s2Idx]) {
                    return false;
                }
            }
            return true;
        }
    }
};