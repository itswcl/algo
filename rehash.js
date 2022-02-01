/*          __                        __
           /\ \                      /\ \
 _ __    __\ \ \___      __      ____\ \ \___
/\`'__\/'__`\ \  _ `\  /'__`\   /',__\\ \  _ `\
\ \ \//\  __/\ \ \ \ \/\ \L\.\_/\__, `\\ \ \ \ \
 \ \_\\ \____\\ \_\ \_\ \__/.\_\/\____/ \ \_\ \_\
  \/_/ \/____/ \/_/\/_/\/__/\/_/\/___/   \/_/\/_/

    Given to a Coding Dojo alumni by Riot Games.
    Rehash an incorrectly hashed string by combining letter count occurrences
    and alphabetizing them.
*/
//            v
const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

// step 1:
// frequencyMap = {}
// step 2:
// extract [keys? values? something?]
// if it's an array -> sort
// ["b70", "a84", "c42"]

// step 3:
// return a string

// hints:
// parseInt(str)
// isNaN(x)
// myObj.hasOwnProperty("key")

function rehash(str) {
  // hash the map
  let frequencyMap = {}
  // for result
  let frequencyArr = []

  // iterate the str
  for (let i = 0; i < str.length; i++) {
    const target = str[i];
    // check if it's letter and not in map yet
    if (isNaN(target) && frequencyMap[target] === undefined) {
      frequencyMap[target] = 0;
      // if it's number
    } else if (!isNaN(target)) {
      // set the key as pervious element
      let key = str[i - 1]
      // current index is first number
      let j = i;
      // store the continue number as string
      let tempNum = "";

      // check next element if it's number
      while (!isNaN(str[j])) {
        // as long as number we add to number String
        tempNum += str[j];
        // move to next index
        j++
      }
      // once the next index is letter we stop and add to the map
      frequencyMap[key] += parseInt(tempNum);
      // and start the outer loop from last element - 1
      // because we incremental 1 outer loop
      i = j - 1
    }
  }
  // turn the map into array
  for (let key in frequencyMap) {
    frequencyArr.push(key + frequencyMap[key])
  }
  // return as whole arr as string
  return frequencyArr.sort().join("")
}

rehash(str1);
console.log(rehash(str1) === expected1, "<-- should be \"true\"");