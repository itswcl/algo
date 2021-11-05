/*
  Given a string that may have extra spaces at the start and the end,
  return a new string that has the extra spaces at the start and the end trimmed (removed)
  do not remove any other spaces.
*/

const str1 = "   hello world     ";
const expected1 = "hello world";

function trim(str) {
    var res = ""

    for (var i = 0; i < str.length; i++) {
    currentIndex = str[i]
    nextIndex = str[i+1]

    if (currentIndex === " " && nextIndex === " ") {
        continue
    } else {
        res += currentIndex
    }
    }
    return res.slice(1, res.length - 1);
}

/*****************************************************************************/

/*
  An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
  typically using all the original letters exactly once.
  Is there a quick way to determine if they aren't an anagram before spending more time?
  Given two strings
  return whether or not they are anagrams
*/

const strA1 = "yes";
const strB1 = "eys";
const expected1 = true;

const strA2 = "yes";
const strB2 = "eYs";
const expected2 = true;

const strA3 = "no";
const strB3 = "noo";
const expected3 = false;

const strA4 = "silent";
const strB4 = "listen";
const expected4 = true;

function isAnagram(s1, s2) {
    if (s1.length !== s2.length) {
        return false
    }

    s1Dict = frequencyTableBuilder(s1)
    s2Dict = frequencyTableBuilder(s2)
    s1Keys = Object.keys(s1Dict)
    for(var i = 0; i<s1Keys.length; i++){
        if(s1Dict[s1Keys[i]] != s2Dict[s1Keys[i]]){
            return false
        }
    }
    return  true

}