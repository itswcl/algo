// findObjectsFilter(searchFor, itemsArr)

const { object } = require("prop-types");

// given a 'search for' object with primitive values and a list of objects
// return a new list of objects containing the same key value pairs as the search for

// given searchFor and items
const items = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "White", age: 31 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

const searchFor1 = {
    firstName: "Bob",
};
// return a new list of objects containing the same key pair values
const output1 = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

const searchFor2 = {
    lastName: "Smith",
    age: 25
};
const output2 = [
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];
// object.keys(obj) [key, key, key]
// object.values(obj) [value, value, value]
/* Object.entries(obj) return 2 dimensional [
    [key, value],]*/
// obj.hasOwnProperty(key) // check key return true/false

function findObjectsFilter(searchObj, items) {
    let result = []
    let searchKeys = Object.keys(searchObj)

    for (const item of items) {
        for (const key of searchKeys) {

            if (item[key] === searchObj[key]) {
                result.push(item)
            }
        }
    }

    return result;
}


function findObjectsFilter2(searchObj, items) {
    // put all the keys for the search object into an array
    const searchKeysArr = Object.keys(searchObj);

    // filter the items
    return items.filter(item => {
        // for each item in items
        // for every key in searchKeysArr
        for (const key of searchKeysArr) {
            // if the key doesn't exist
            if (!item.hasOwnProperty(key) || item[key] !== searchObj[key]) {
                return false;
            }
        }
        // if the for loop returns no false, return true
        return true;
    })
}


console.log(findObjectsFilter(searchFor1, items));
console.log(findObjectsFilter(searchFor1, items).toString() == output1.toString());
console.log(findObjectsFilter(searchFor2, items));
