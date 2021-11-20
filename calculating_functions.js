// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

function zero(fun) { return fun ? fun(0): 0; }
// rewrite from below
//     if (fun) {
//         return fun(0);
//     } else {
//         return 0;
//     }
function one(fun) {let value = 1;if (fun) {return fun(value);} else {return value;}}
function two(fun) {let value = 2;if (fun) {return fun(value);} else {return value;}}
function three(fun) {let value = 3;if (fun) {return fun(value);} else {return value;}}
function four(fun) {let value = 4;if (fun) {return fun(value);} else {return value;}}
function five(fun) {let value = 5;if (fun) {return fun(value);} else {return value;}}
function six(fun) {let value = 6;if (fun) {return fun(value);} else {return value;}}
function seven(fun) {let value = 7;if (fun) {return fun(value);} else {return value;}}
function eight(fun) {let value = 8;if (fun) {return fun(value);} else {return value;}}
function nine(fun) {let value = 9;if (fun) {return fun(value);} else {return value;}}

function plus(insideNum) {
    // if
    return function(outsideNum) {
        return outsideNum + insideNum
    }
}
function minus(insideNum) {
    return function(outsideNum) {
        return outsideNum - insideNum
    }
}
function times(insideNum) {
    return function(outsideNum) {
        return outsideNum * insideNum
    }
}
function dividedBy(insideNum) {
    return function(outsideNum) {
        return Math.floor(outsideNum / insideNum)
    }
}
