/*
  Efficiently combine two already sorted multiset arrays
  into an array containing the sorted set intersection of the two.
  Output: only the shared values between the two arrays (deduped).
  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const arrA1 = [0, 1, 2, 2, 2, 7];
const arrB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const arrA2 = [0, 1, 2, 2, 2, 7];
const arrB2 = [2, 2];
const expected2 = [2];

const arrA3 = [0, 1, 2, 2, 2, 7];
const arrB3 = [10];
const expected3 = [];

/**
 * Venn Diagram Visualization (bottom):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(n) linear, n = max(sortedA.length, sortedB.length) when there are
 *    dupes we may end up looping over all items of longer arr.
 * - Space: O(n) linear, n = shorter array length.
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} returns The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */


function orderedIntersection(sortedA, sortedB) {
  let shortArr = [];
  let longArr = [];
  let newArr = [];

  if (sortedA.length < sortedB.length) {
    shortArr = sortedA;
    longArr = sortedB;
  } else {
    shortArr = sortedB;
    longArr = sortedA;
  }

  //checks each index in short array as current num
  for (let i = 0; i < shortArr.length; i++) {
    //currentNum is value of position in array at index
    const currentNum = shortArr[i];
    //while looking at ONE value of short array we will compare will all values of long array
    for (let j = 0; j < longArr.length; j++) {
      //this is the value in the long array that we are comparing, each time the loop executes it moves up the array
      const compareNum = longArr[j];
      //if the number from short array has equal value to num from long AND num short array NOT EQUAL to the last value added to the new Array
      if (currentNum == compareNum && currentNum != newArr[newArr.length - 1]) {
        //if it is the same, but not a duplicate, add
        newArr.push(currentNum);
      }
    }
  }

  return console.log(newArr);
}


orderedIntersection(arrA1, arrB1);
orderedIntersection(arrA2, arrB2);
orderedIntersection(arrA3, arrB3);