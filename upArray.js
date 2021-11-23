function upArray(arr){
    // ...
    if (arr.length === 0) return null;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0 || arr[i].toString().length !== 1) {
        return null;
        }
    }

    let arrIncreaseByOne = (parseInt(arr.join(""))+1).toString().split("");

    return arrIncreaseByOne.map(element => parseInt(element));
}