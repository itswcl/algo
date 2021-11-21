function wave(str){
    // to prevent empty str giving
    if (str.length === 0) return [];

    // array to get new words of wave
    let wordWaves = [];

    for (let i = 0; i < str.length; i++) {
        const currentLetter = str[i].toUpperCase();

        // need to skip if currentLetter is empty space
        if (currentLetter !== " ") {

        // add the front letters + currentLetter + back letters
        const word = str.slice(0, i) + currentLetter + str.slice(i+1);
        // add the word to the waves
        wordWaves.push(word);
        }
    }

    return wordWaves
}