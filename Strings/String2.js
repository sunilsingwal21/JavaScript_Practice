// Reverse a string

var name = "Sunil Singwal"

var splitName = name.split('')
var reverseName = splitName.reverse()
console.log(reverseName.join(''))



// Check if a string is pallindrome

function isPallindrome(str) {
    const reversed = str.split('').reverse().join('')
return str == reversed
}  

console.log(isPallindrome('madam'))
console.log(isPallindrome('sunil'))



// Count occurrences of each character in a String

function countCharacters(str1) {
    return str1.split('').reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});
}

console.log(countCharacters("programming"))



// Check if two Strings are Anagrams

function getCharCount(str2) {
    return str2.split('').reduce((acc, char)=> {
        acc[char] = (acc[char] || 0) + 1;
    return acc;
}, {});
}

function isAnagram(str3, str4) {
const count1 = getCharCount(str3.toLowerCase());
const count2 = getCharCount(str4.toLowerCase());

return JSON.stringify(count1) === JSON.stringify(count2);
}
console.log(isAnagram("listen", "silent"));



// Reverse words in a sentence

let sentence = "I am a Senior SDET"
let reverseSentence = sentence.trim().split(/\s+/).reverse().join(' ')
console.log(reverseSentence)