const filterLetters = (letters, letter) => {
    letter = letter.toUpperCase();
    letters = letters.filter((currentLetter, index) => {
        return currentLetter.toUpperCase() === letter;
    });
    return letters;
}

console.log(filterLetters(['n', 'k', 'j', 'i', 'k', 't'], 'K'));