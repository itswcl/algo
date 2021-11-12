/*
Given an int to represent how much change is needed
calculate the fewest number of coins needed to create that change,
using the standard US denominations
*/

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

function fewestCoinChange(cents) {
    var dic = {}

    if (cents > 24) {
        remainder = cents % 25
        dic.quarter = (cents - remainder) / 25
        cents = remainder
    }

    if (cents > 9) {
        remainder = cents % 10
        dic.dime = (cents - remainder) / 10
        cents = remainder
    }

    if (cents > 4) {
        remainder = cents % 5
        dic.nickel = (cents - remainder) / 5
        cents = remainder
    }

    if (remainder > 0) {
        dic.penny = remainder
    }
    return dic
}

function fewestCoinChange2(cents) {
    var dict={}
    var remainder = 0
    //quarter logic
    if (cents >= 25){
        remainder  = cents % 25
        var qs = (cents-remainder)/25
        cents = remainder
        dict['quarter'] = qs
    }
    //dime logic
    if (cents >= 10){
        remainder = cents % 10
        var ds = (cents - remainder)/10
        cents = remainder
        dict['dime']=ds
    }
    //nickel logic
    if (cents >= 5){
        remainder = cents % 5
        var ns = (cents - remainder)/5
        cents = remainder
        dict['nickel']=ns
    }
    //penny logig
    if (cents>1){
        var ps = cents
        dict['penny']=ps
    }
    return dict
}

/*****************************************************************************/

/*
Missing Value
You are given an array of length N that contains, in no particular order,
integers from 0 to N . One integer value is missing.
Quickly determine and return the missing value.
*/

const nums1 = [3, 0, 1];
const expected1 = 2;

const nums2 = [3, 0, 1, 2];
const expected2 = null;
// Explanation: nothing is missing

/*
Bonus: now the lowest value can now be any integer (including negatives),
instead of always being 0.
*/

const nums3 = [2, -4, 0, -3, -2, 1];
const expected3 = -1;

const nums4 = [5, 2, 7, 8, 4, 9, 3];
const expected4 = 6;

/**
 * Determines what the missing int is in the given unordered array of ints
 *    which spans from 0 to N where only one int is missing. With this missing
 *    int, a consecutive sequence of ints could be formed from the array.
 * Bonus: Given ints can span from N to M (start and end anywhere).
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} unorderedNums
 * @returns {number|null} The missing integer needed to be able to form an unbroken
 *    consecutive set of integers from the given array or null if none is missing.
 */
function missingValue(unorderedNums) {
    var maxNum = Math.max(...unorderedNums)
    var minNum = Math.min(...unorderedNums)

    for (var i = minNum; i < maxNum; i++) {
        if (!unorderedNums.includes(i)) {
            return i
        }
    }

    return null
}

function missingValue2(unorderedNums) {

    greater = 0
    biggest = unorderedNums[0]
    var missing = []

    for (var j =0; j<unorderedNums.length; j++){
        if (unorderedNums[j]>biggest){
            biggest = unorderedNums[j]
        }
        var current = unorderedNums[j]
        var found_bigger = false
        for(var i = 0; i<unorderedNums.length; i++){
            if(unorderedNums[i] == current+1){
                greater +=1
                found_bigger = true

            }

        }
        if (! found_bigger){
            missing.push(unorderedNums[j])
        }
    }
    // console.log(missing)
    // console.log(biggest)
    if (greater == unorderedNums.length-1){
        return null
    }
    else{
        if(missing[0]==biggest){
            return missing[1]+1
        }
        else{
            return missing[0]+1
        }
    }
}