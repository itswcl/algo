/*
Zip Arrays into Map


Given two arrays, create an associative array (aka hash map, an obj / dictionary) containing keys from the first array, and values from the second.
Associative arrays are sometimes called maps because a key (string) maps to a value
*/

const keys1 = ["abc", 3, "yo"];
const vals1 = [42, "wassup", true];
// const expected1 = {
//     abc: 42,
//     3: "wassup",
//     yo: true,
// };

function zipArraysIntoMap(keys, values) {
    // SETUP
    var dic = {};
    // WORK
        // loop thru both at the same time
        for (var i = 0; i < keys.length; i++) {
            // key1 index will be key val1 will be the value
            dic[keys[i]] = values[i]
        }
    // RESULT
    return dic
}

console.log(zipArraysIntoMap(keys1, vals1))

/*****************************************************************************/

/*
Invert Hash
A hash table / hash map is an obj / dictionary
Given an object / dict,
return a new object / dict that has the keys and the values swapped so that the keys become the values and the values become the keys
*/

const obj1 = { name: "Zaphod", charm: "high", morals: "dicey" };
const expected1 = { Zaphod: "name", high: "charm", dicey: "morals" };

// function invertObj(obj) {
//     // SETUP
//     var dic = {}
//     var arrayKeys = Object.values(obj);
//     var arrayVals = Object.keys(obj);
//     // WORK
//     dic = zipArraysIntoMap(arrayKeys, arrayVals)
//     // RESULT
//     return dic
// }

function invertObj(obj) {
    return zipArraysIntoMap(Object.values(obj), Object.keys(obj))
}

console.log(invertObj(obj1))