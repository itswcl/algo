/*
Parens Valid
Given an str that has parenthesis in it
return whether the parenthesis are valid
*/

const str1 = "Y(3(p)p(3)r)s";
const expected1 = true;

const str2 = "N(0(p)3";
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k";
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.

const str4 = "a(b))(c";
const expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing.

/*
Determines whether the parenthesis in the given string are valid.
Each opening parenthesis must have exactly one closing parenthesis.
*/

// try to count of number of opening parens as compared to closing parens
function parensValid(str) {
// we can try to keep count of the number of opening parens as compared to closing parens
freqTable = {};
    for (let i = 0; i<str.length; i++){
        char = str[i];
            if (freqTable['('] < freqTable[')']){ // checks to see if more closing parens are started compared to opening
            return false
            }
            if(char === '('){
            if(freqTable.hasOwnProperty('(')){
                freqTable['('] += 1;
            } else {
                freqTable['('] = 1;
            }

            } else if (char === ')') {
            if(freqTable.hasOwnProperty(')')){
                freqTable[')'] += 1;
            } else {
                freqTable[')'] = 1;
            }
            }
    }
    return freqTable['('] === freqTable[')'];
}

/*****************************************************************************/

/*
Braces Valid
Given a string sequence of parentheses, braces and brackets, determine whether it is valid.
*/

const str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
const expected1 = true;

const str2 = "D(i{a}l[ t]o)n{e";
const expected2 = false;

const str3 = "A(1)s[O (n]0{t) 0}k";
const expected3 = false;

/*
Determines whether the string's braces, brackets, and parenthesis are valid
based on the order and amount of opening and closing pairs.
*/
function bracesValid(str) {
    // SETUP
    var openingBraceStack = [] //use .push() and .pop()
    var opens = "({["
    var closeToOpen = {
        ")": "(",
        "}": "{",
        "]": "["
    }

    // WORK
    for (var i = 0; i < str.length; i++) {
        var currentChar = str[i]
        // if statment check if currentChar is opening brace
        if (opens.includes(currentChar)) {
            openingBraceStack.push(currentChar);
            // else if checks if current is a closing brace
        } else if (currentChar in closeToOpen) {
            // check value for key of current value is same as most recent value in stack
            if (closeToOpen[currentChar] === openingBraceStack[openingBraceStack.length - 1]) {
                // match we'll remove the recent value in stack
                stack.pop();
            } else {
                return false
            }
        }
    }
    // RETURN
    return openingBraceStack.length === 0;
}