// Write a function to reverse a string.	

function reversestring(str){
    const reversestring = 
    str.split("").reduce((acc, char) => char + acc, "");
    console.log(reversestring);
}					
console.log("reverse string:");
reversestring("thats a reverse string");
reversestring("aniket savaliya");

// Write a function to check if a string is a palindrome.

function isPalindrome(str) {
    str = str.replace(/[^0-9a-z]/gi, '').toLowerCase();

    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }
    return true;
}
const string1 = prompt("Enter a string:");

if (isPalindrome(string1)) {
    console.log(`${string1} is a palindrome`);
} else {
    console.log(`${string1} is not a palindrome`);
}

// Write a function to count the number of vowels in a string.

function getVowels(string) {
    let Vowels = "aAeEiIoOuU";
    let vowelsCount = 0;
    for (let i = 0; i < string.length; i++) {
        if (Vowels.indexOf(string[i]) !== -1) {
            vowelsCount += 1;
        }
    }
    return vowelsCount;
}
console.log(
    "The Number of vowels in -" +
        " A Sample POrtal For String:" +
        getVowels(
            "A Sample POrtal For String"
        )
);

// Write a function to capitalize the first letter of each word in a sentence.	

function capitalizeSentences(text) {

    const sentences = text.split(/\.|\?|!/);
    const capitalizedSentences = sentences
        .filter(sentence =>
            sentence.trim() !== '')
        .map(sentence =>
            sentence.trim()[0]
                .toUpperCase() +
            sentence.trim().slice(1));

    return capitalizedSentences.join('. ') + '.';
}

const inputText =
    `thats is exaple string for first letter of each word is capital.`;
const result = capitalizeSentences(inputText);
console.log(result);

// Write all the examples of string methods.
