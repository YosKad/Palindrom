console.log("hello world");


function checkPalindrom(text: any): boolean {
    return text == text.split('').reverse().join('');
}

console.log(checkPalindrom('hello'));
console.log(checkPalindrom('abba'));
