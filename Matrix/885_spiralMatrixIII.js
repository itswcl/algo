/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function (rows, cols, rStart, cStart) {
    // direction boundery for as center as 0,0 right 0, 1 left 1, 0 bot 1, 0 top -1, 0
    //           -1,0
    //  0,-1 rStart,cStart 0,1
    //            1,0
    let top = rStart - 1;
    let bot = rStart + 1;
    let left = cStart - 1;
    let right = cStart + 1;

    // start point by provided and update by moving points
    let rowPoint = rStart; // row point
    let colPoint = cStart; // col point

    // result array to input all points
    const result = [];

    // rows and cols present the total point we have in result
    while (result.length < rows * cols) {
        // 1. right direction
        while (colPoint < right) {
            if (isInMatrix(rowPoint, colPoint, rows, cols)) result.push([rowPoint, colPoint]);
            // each time we loop we add up by 1
            colPoint++;
        }
        // add right boundry 1 point
        right++;

        // 2. bottom direction
        while (rowPoint < bot) {
            if (isInMatrix(rowPoint, colPoint, rows, cols)) result.push([rowPoint, colPoint]);
            // each time we loop we add up by 1
            rowPoint++;
        }
        // add bottom boundry by 1
        bot++;

        // 3. left direction
        while (colPoint > left) {
            if (isInMatrix(rowPoint, colPoint, rows, cols)) result.push([rowPoint, colPoint]);
            // each time we loop we add up by 1
            colPoint--;
        }
        // deduct left boundry by 1 point
        left--;

        // 4. top direction
        while (rowPoint > top) {
            if (isInMatrix(rowPoint, colPoint, rows, cols)) result.push([rowPoint, colPoint]);
            // each time we loop we add up by 1
            rowPoint--;
        }
        // deduct top boundry by 1 point
        top--
    }
    return result;
};

const isInMatrix = (rowPoint, colPoint, rows, cols) => {
    return rowPoint >= 0 && rowPoint < rows && colPoint >= 0 && colPoint < cols
}