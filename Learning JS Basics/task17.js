const vowelCount = (str) => {
    const vowels = {}
    str = str.split('');
    str.forEach((char) => {
        if (isVowel(char) && !Object.keys(vowels).includes(char)) {
            vowels[char] = countVowel(str, char);
        }
    });
    return vowels;
}

const isVowel = (char) => 'aeiou'.indexOf(char) > -1;
const countVowel = (str, vowel) => str.filter(char => char === vowel).length;

let testString = 'ammar_ahmed_is_going_home';
console.log(vowelCount(testString));