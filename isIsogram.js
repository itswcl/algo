function isIsogram(str){
    let strCase = str.toUpperCase();
    let countTable = {};

    for (let i = 0; i < strCase.length; i++) {
        const letter = strCase[i];

        if (countTable.hasOwnProperty(letter)) {
            return false;
        } else {
            countTable[letter] = 1;
        }
    }
    return true
}