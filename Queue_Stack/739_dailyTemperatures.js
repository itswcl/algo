/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    // initial array with temp size with default 0 days
    const waitDays = new Array(temperatures.length).fill(0)
    // initial stack for days
    const stack = [];

    // itertate the temp with day
    for (let curDay = 0; curDay < temperatures.length; curDay++) {
        // each time we need currTemp for comparesion
        const currTemp = temperatures[curDay]

        // if stack exist and current temp higher than pervious (prev day we push to stack)
        while (stack && currTemp > temperatures[stack[stack.length - 1]]) {
            // take out the prev day
            const prev = stack.pop()
            // update the prev day to how far the current day with previous day is
            waitDays[prev] = curDay - prev;
        }

        // we add the current day into stack every time
        stack.push(curDay)
    }
    return waitDays;
};