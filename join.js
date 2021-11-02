/*
  Given an arr and a separator string, output a string of every item in the array separated by the separator.

  No trailing separator at the end
  Default the separator to a comma with a space after it if no separator is provided
*/

const arr1 = [1, 2, 3];
const separator1 = ", ";
const expected1 = "1, 2, 3";

const arr2 = [1, 2, 3];
const separator2 = "-";
const expected2 = "1-2-3";

const arr3 = [1, 2, 3];
const separator3 = " - ";
const expected3 = "1 - 2 - 3";

const arr4 = [1];
const separator4 = ", ";
const expected4 = "1";

const arr5 = [];
const separator5 = ", ";
const expected5 = "";

function join(arr, separator) {
    // SETUP
    // variable that holds the new string we are going to build
    var result = "";

    // WORK
    // loop through the array to the second to last element
    for(let i=0; i<arr.length-1; i++){
      // get the value from the array, add it to the new string and add the separator to the new string
    result += arr[i] + separator;
    }
    // add the final element in the array to he new string
    result += arr[arr.length-1];
    // RETURN
    return result;
}

/*****************************************************************************/

/*
Book Index
Given an array of ints representing page numbers
return a string with the page numbers formatted as page ranges when the nums span a consecutive range
*/

const nums1 = [1, 13, 14, 15, 37, 38, 70];
const expected1 = "1, 13-15, 37-38, 70";

function bookIndex(nums) {
  // SETUP
  // new string that we are going to build
    var result = ""
  // WORK
  // Loop through the nums array
    for (var i = 0; i < nums.length - 1; i++) {
        // assign another variable to i
        var consecutiveNumIdx = i + 1;
        // check if the next element after the current is a consecutive number e.g. if i = 0, look at i = 1
        while (nums[consecutiveNumIdx] === nums[consecutiveNumIdx - 1] + 1) {
            // if that element is consecutive, continue looking ahead until we come across an element that is no longer consecutive
            consecutiveNumIdx++
        }
            // we can use a while loop to continue looking ahead until the numbers are no longer consecutive

        // add the page numbers to the string
            // if there was not a consecutive, just add the number and the ", "
            // if there was a consecutuve, add the first and last of the consecutive numbers, separated by a dash, followed by the ", "
        // consecutiveNumIdx is still i + 1, not consecutive
        if (consecutiveNumIdx === i+1) {
            result += nums[i];
        }
        // consecutiveNumIdx greater than i + 1
        if (consecutiveNumIdx > i+1) {
            result += nums[i] + "-" + nums[consecutiveNumIdx - 1]
        }

        // if i is not at nums.length - 1 then append comma
        if (i < nums.length - 1) {
            result += ", "
        }
    }

  // RETURN
  // return that new string
    return result;
}