/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    // if nonn or 1 char
    if (s.length < 2) return false;

    // dafult stack for push in by openning tag
    const stack = []
    // index corespondning close and open
    const openTags = ["(", "[", "{"]
    const closeTags = [")", "]", "}"]

    // iterate thru the giving str
    // string of "of" giving us element >string of "in" giving us idx< we need ele this time
    for (let tag of s) {
        // if first we meet open tag we put in stack
        if (openTags.indexOf(tag) > -1) {
            stack.push(tag);
        } else {
            // if not openTag we found the index of close tag
            const closeIdx = closeTags.indexOf(tag)

            // and we compared the index if same as the one we push before
            // openTags of closeIdx giv back the open tag in the position
            if (stack[stack.length - 1] === openTags[closeIdx]) {
                stack.pop()
            } else {
                return false
            }
        }
    }

    // in the end stack should be empty
    return stack.length === 0
};