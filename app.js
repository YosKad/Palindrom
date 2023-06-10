console.log("hello world");
function checkPalindrom(text) {
    return text == text.split('').reverse().join('');
}
console.log(checkPalindrom('hello'));
console.log(checkPalindrom('abba'));
