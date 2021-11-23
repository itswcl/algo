function upArray(arr){
    if (arr.length === 0) return null;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0 || arr[i].toString().length !== 1) {
            return null;
        }
    }

    if (arr.length <= 14) {
        arrIncreaseByOne = (parseInt(arr.join(""))+1).toString().split("");
    } else {
        const strOfNum = arr.join("")

        arrIncreaseByOne = (strOfNum.slice(0, strOfNum.length - 8) + (parseInt(strOfNum.slice(-8)) + 1).toString()).split("")
    }

    return arrIncreaseByOne.map(element => parseInt(element));
}