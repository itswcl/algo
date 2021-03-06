/*
    Input: arr, callback
    Output: arr (with elements removed)
    Remove every element in the array, starting from idx 0,
    until the callback function returns true when passed the
    iterated element.
    Return an empty array if the callback never returns true
*/
const arr1 = [1, 4, 3, 6, 9, 3];
const callback1 = (elem) => {
    return elem > 5;
};
const expected1 = [6, 9, 3];

const arr2 = [1, 4, 3, 6, 9, 3];
const callback2 = (elem) => {
    return elem > 2;
};
const expected2 = [4, 3, 6, 9, 3];

const arr3 = [1, 4, 3, 6, 9, 3];
const callback3 = (elem) => false;
const expected3 = [];


function dropIt(arr, callback) {
    // with for loop
    // iterate the for loop with same index each time
    for (let i = 0; i < arr.length; i) {
        // once call back comes true we stop
        if (callback(arr[i])) {
            break
        } else {
        // if true we take first element out
            arr.shift()
        }
    }

    /* second way with for loop
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i])) {
            // only iterate when call back is false
            for (let j = 0; j < arr.length - 1; j++) {
                // switch all element from front to back
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
            // pop out the last element from the array
            arr.pop();
        } else {
            // once meets true return the altered arr
            return arr;
        }
    }*/

    // recursive
    // Base Case
    // if (arr.length<1) {return [];}
    // If Condition is false
    // if (!callback(arr[0])) {
    //     // remove first item in array
    //     arr.shift();
    //     dropIt(arr, callback);
    // }

    return arr;
}

console.log(dropIt(arr1, callback1));
console.log(dropIt(arr2, callback2));
console.log(dropIt(arr3, callback3));