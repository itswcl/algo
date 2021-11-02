var str1 = " there's no free lunch - gotta pay yer way. ";
var expected1 = "TNFL-GPYW";

var str2 = "Live from New York, it's Saturday Night!";
var expected2 = "LFNYISN";

function acronymize(str) {
    // SETUP
    var arr = str.split(" ");
    var result = ""

    // WORK
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== "") {
            result += arr[i][0].toUpperCase();
        }
    }

    // RETURN
    return result;
}

/***************/

var str1 = "creature";
var expected1 = "erutaerc";

var str2 = "dog";
var expected2 = "god";

function reverse(str) {
    var res = "";

    for (var i = str.length - 1; i >= 0; i++) {
        res += str[i];
    }
    return res;
}