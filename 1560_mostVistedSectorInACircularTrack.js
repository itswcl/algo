/*
Given an integer n and an integer array rounds. We have a circular
track which consists of n sectors labeled from 1 to n. A marathon
will be held on this track, the marathon consists of m rounds. The
ith round starts at sector rounds[i - 1] and ends at sector rounds[i]
. For example, round 1 starts at sector rounds[0] and ends at sector
rounds[1]
*/

// Input: n = 4, rounds = [1,3,1,2] Output: [1,2]
// Input: n = 7, rounds = [1,3,5,7] Output: [1,2,3,4,5,6,7]


const mostVisited = (nth, rounds) => {
    // initial result
    let mostVisitedPoint = []
    // set start and end point
    const startPoint = rounds[0]
    const endPoint = rounds[rounds.length - 1]

    // if start is less or equal to end point we can assume we been thru
    // the point from start to end each time
    if (startPoint <= endPoint) {
        for (let i = startPoint; i <= endPoint; i++) {mostVisitedPoint.push(i)}
    // if start from large number
    } else {
        // whatever less than endpoint we been thru
        for (let i = 1; i <= endPoint; i++) {mostVisitedPoint.push(i)}
        // and the first start point to the n cuz start point always less than n
        for (let i = startPoint; i <= nth; i++) {mostVisitedPoint.push(i)}
    }
    return mostVisitedPoint
}

console.log(mostVisited(9, [1,2,3]))
console.log(mostVisited(2, [2,1,2,1,2]))
console.log(mostVisited(3, [1,2,3,2]))