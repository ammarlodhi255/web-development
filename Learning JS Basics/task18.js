const removeVowels = (str) => {
    str = str.split('');
    return str.filter(char => !isVowel(char));
}

const isVowel = (char) => 'aeiou'.indexOf(char) > -1;

let testString = 'ammar_ahmed_is_going_home';
console.log(removeVowels(testString));