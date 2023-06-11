console.log("hello world");
function checkPalindrom() {
    var word = document.getElementById("palindrome").value.toLowerCase();
    ;
    var res = "";
    for (i = word.length - 1; i >= 0; i--) {
        res += word[i];
    }
    if (word == res) {
        document.getElementById("result").innerHTML = "<strong>Yes</strong>, '".concat(word, "' is a palindrome!");
    }
    else {
        document.getElementById("result").innerHTML = "<strong>No</strong>, '".concat(word, "' is not a palindrome.");
    }
}
// console.log(checkPalindrom('hello'));
// console.log(checkPalindrom('abba'));
