function rot13(message){
    //your code here
    let lowLetters = "abcdefghijklmnopqrstuvwxyz";
    let upLetters = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
    let riotMessage = ""

    for (var i = 0; i < message.length; i++) {
      const letterMessage = message[i]

      if (lowLetters.indexOf(letterMessage) !== -1) {
        const letterLetterIdx = lowLetters.indexOf(letterMessage)
        riotMessage += lowLetters[(letterLetterIdx + 13) % 26]

      } else if (upLetters.indexOf(letterMessage) !== -1) {
        const letterLetterIdx = upLetters.indexOf(letterMessage)
        riotMessage += upLetters[(letterLetterIdx + 13) % 26]

      } else {
        riotMessage += letterMessage
      }
    }
    return riotMessage;
  }