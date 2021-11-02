// variables
var variable_name // declared a variable
variable_name = "Wei Lee" // store value in variable

var full_name = "Wei Lee"

var age = 31;
var string_age = "31";

age = age + 1;
console.log(age);

string_age = string_age + 1;
console.log(string_age)

var check = true;
var other = false;

var price = 30.22;
// loops
for (var i = 0 /* 1.initialize */ ; i < 11 /* 2.condition */; i++ /* 3.increment */) {
    console.log(i); // 4.code body
}
// T-charts

/*
    var / value
    i / 0 > 1 > 2 > 3 > 4 > 5 > 6 > 7 > 8 > 9 > 10 > 11 >> i = 11
    log / 0 > 1 > 2 > 3 > 4 > 5 > 6 > 7 > 8 > 9 > 10 >> 10
*/

var a = 25;
a = a - 13;
console.log(a/2);
    
a = "hello";
console.log(a + " hello");

/*
    var / value
    a / 25 > 12 > 'hello'
    log / 6 > 'hello hello'
*/

for(var i=0; i<10; i++) {
    console.log(i);
    i = i + 3; 
}
    
console.log("outside of the loop " + i);

/*
    var / value
    i / 0 > 3 > 4 > 7 > 8 > 12
    log / 0 > 4 > 8
    outside log / 12
*/

function getTotal(arrayOfNumbers) {
    var sum = arrayOfNumbers[0];

    for(var i=0; i<arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i];
        console.log("the current sum is: " + sum); 
    }

    console.log("the total is: " + sum);
}
getTotal([1, 3, 5]);

/*
    var / value
    sum / 1 > 2 > 5 > 10
    i / 0 > 1 > 2 > 3
    inside log / 2 > 5 > 10
    outside log / 10
*/