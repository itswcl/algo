// given two sorted arrays that may have duplicate values, merge them and remove any duplicates

function mergeDedupe(arr1, arr2) {
    let sort = [];
    let arr1Len = arr1.length
    let arr2Len = arr2.length
    let leftIdx = 0;
    let rightIdx = 0;

        while (arr1Len) {
            if (arr1[leftIdx] <= arr2[rightIdx]) {
                if (sort[sort.length-1] !== arr1[leftIdx]) {
                    console.log(leftIdx)
                    sort.push(arr1[leftIdx])
                    leftIdx++
                } else {
                    leftIdx++
                    arr1Len--
                }
            } else {
                if (sort[sort.length-1] !== arr2[rightIdx]) {
                    sort.push(arr2[rightIdx])
                    rightIdx++
                } else {
                    rightIdx++
                    arr1Len--
                }
            }
            arr1Len--
        }

        while (arr2Len) {
            if (arr1[leftIdx] <= arr2[rightIdx]) {
                if (sort[sort.length-1] !== arr1[leftIdx]) {
                    sort.push(arr1[leftIdx])
                    leftIdx++
                } else {
                    leftIdx++
                    arr2Len--
                }
            } else {
                if (sort[sort.length-1] !== arr2[rightIdx]) {
                    sort.push(arr2[rightIdx])
                    rightIdx++
                } else {
                    rightIdx++
                    arr2Len--
                }
            }
            arr2Len--
        }


    return sort;
}

// try out some other tests
console.log(mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5])) // [ 1, 3, 4, 5, 8, 10 ]
// mergeDedupe([2, 3, 3, 5, 8, 10, 12], [1, 3, 4, 6]) // [1, 2, 3, 4, 5, 6, 8, 10, 12]

//      a ->
//     [1, 3, 3, 5, 8, 10]
//      b
//     [1, 3, 4, 5]