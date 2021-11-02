// conditionals
// age = 99;

// if (age >= 16) {
//     console.log("driving")
//     if (age >= 18) {
//         console.log("lottery")
//         if (age >= 21) {
//             console.log("alcohol tobacco")
//         }
//     }
// } else {
//     console.log("not enough")
// }
// 

var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];

// your code here!
for (var i = 0; i < numbers.length; i++) {
    number = numbers[i];
    
    if (number > 0) {
        countPositives+= 1;
    }
}

console.log("there are " + countPositives + " positive values");
