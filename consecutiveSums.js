// This is an actual interview algorithm given to a Coding Dojo alum

// Find Consecutive Sums

// You are given arr, a list of positive integers 0-255
// You are given k, a integer between 1-255

// Find all the consecutive groups of integers that add up to the value k

// inputs
// k = 16
// arr = [2, 5, 3, 6, 7, 0, 0, 23, 11]

// outputs
// [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are including in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0]
// ]

// create new arrays
// if no matches, return empty array


function findConsecutiveSums(arr, target) {
    let result = []; // [[2,5,3,6]]

    for (let i = 0; i < arr.length; i++) {
        let tempTotal = arr[i];   // 2 > 7 > 10 > 16
        let subResult = [arr[i]]; // [2, 5, 3, 6]

        // if (tempTotal > target) return result;

        for (let j = i + 1; j < arr.length; j++) {
            const innerVal = arr[j] // 5, 3, 6 7
            if (tempTotal <= target) { // 7 < 16, 10 < 16
                tempTotal += innerVal // 2+5+3+6+7
                subResult.push(innerVal)
            } else if (tempTotal > target) { // 23 > 16
                break;
            }
            if (tempTotal === target) {// 16=16
                console.log("subResult", subResult)
                result.push(subResult);
                console.log("result", result)

                if (arr[j+1] === 0) {
                    continue;
                } else {
                    break;
                }
            }
        }
    }
    return result;
}

console.log(findConsecutiveSums([2, 5, 3, 6, 7, 0, 0, 23, 11], 16));