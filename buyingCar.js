/*
A man has a rather old car being worth $2000. He saw a secondhand car being worth $8000.
He wants to keep his old car until he can buy the secondhand one.
He thinks he can save $1000 each month but the prices of his old car and of the new one
decrease of 1.5 percent per month. Furthermore this percent of loss increases of 0.5 percent
at the end of every two months. Our man finds it difficult to make all these calculations.

end month 1: percentLoss 1.5 available -4910.0
end month 2: percentLoss 2.0 available -3791.7999...
end month 3: percentLoss 2.0 available -2675.964
end month 4: percentLoss 2.5 available -1534.06489...
end month 5: percentLoss 2.5 available -395.71327...
end month 6: percentLoss 3.0 available 766.158120825...
return [6, 766] or (6, 766)

nbMonths((2000, 8000, 1000, 1.5), [6, 766])
nbMonths((12000, 8000, 1000, 1.5) ,[0, 4000])
*/

function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
    //your code here
    if (startPriceOld >= startPriceNew) {
        return [0, startPriceOld - startPriceNew]
    }
    // 6000 + (old - new) * 98.5 * 98 * 98 * 97.5 * 97.5 * 97
    startPriceOld = startPriceOld * (100 - percentLossByMonth) / 100
    startPriceNew = startPriceNew * (100 - percentLossByMonth) / 100
    var savingperMonthNew = savingperMonth;
    var monthCount = 0;
    var savingperMonthNew = savingperMonth

    while ((savingperMonthNew + (startPriceOld - startPriceNew)) < 0) {
        monthCount++;

        if (monthCount % 2 === 1) {
        percentLossByMonth += 0.5
        savingperMonthNew += savingperMonth
        startPriceOld = startPriceOld * (100 - percentLossByMonth) / 100
        startPriceNew = startPriceNew * (100 - percentLossByMonth) / 100
  //       console.log("condition 1",monthCount, savingperMonthNew, (startPriceOld-startPriceNew))

        } else {

        savingperMonthNew += savingperMonth
        startPriceOld = startPriceOld * (100 - percentLossByMonth) / 100
        startPriceNew = startPriceNew * (100 - percentLossByMonth) / 100
  //       console.log("condition 2",monthCount, savingperMonthNew, (startPriceOld-startPriceNew))
        }
    }
    return ([monthCount + 1, Math.round(savingperMonthNew + (startPriceOld - startPriceNew))])
}