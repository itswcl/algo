var rob = function(nums) {
    // default from rob1 and rob as [0, 0]
    let rob1 = rob2 = 0;

    // go thru the number as [0, 0, i, i+1] position
    for (let num of nums) {
        // each time will update rob2 as new MAX and rob1 as prve rob2
        // we need to use rob1+num as skip the middle
        let temp = Math.max(rob1 + num, rob2)
        rob1 = rob2;
        rob2 = temp;
    }
    return rob2;
}