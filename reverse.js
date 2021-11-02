var apples = "apples";
var oranges = "oranges";
var temp = apples;

apples = oranges;
oranges = temp;

// var      | val
// apples   | "apples" > "oranges"
// oranges  | "oranges" > "apples"
// temp     | "apples"

/*
["a", "b", "c", "d", "e"];

["e", "d", "c", "b", "a"];
*/

function reverse(array) {
    // iterate thru start to middle of array index 0, 1
    for (var i = 0; i < Math.floor(array.length / 2); i++) { 
        // temp to store old value
        var temp = array[i]
        // update the new value to var index 0, 1
        array[i] = array[array.length - 1 - i];
        // update the old value to new var index 4, 3
        array[array.length - 1 - i] = temp;
    }
    return array;
}

console.log(reverse(["a", "b", "c", "d", "e"]));

// var      / val
// array    / ["a", "b", "c", "d", "e"]
// i        / 0 > 1 > 2
// temp     / "a" > "b"
// array[0] / "e"
// array[1] / "d"
// array[4] / "a"
// array[3] / "b"
// log      / ["e", "d", "c", "b", "a"]