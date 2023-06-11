console.log("hello world");

function validateInput() {
  var palindrome = document.getElementById("palindrome");
  var checkButton = document.getElementById("checkButton");

  if (palindrome.validity.valid) {
    checkButton.disabled = false;
  } else {
    checkButton.disabled = true;
  }
}

function checkPalindrom() {
  var word = (
    document.getElementById("palindrome") as HTMLInputElement
  ).value.toLowerCase();
  var result = "";
  for (i = word.length - 1; i >= 0; i--) {
    result += word[i];
  }

  if (word == result) {
    document.getElementById(
      "result"
    )!.innerHTML = `<strong>Yes</strong>, '${word}' is a palindrome!`;
  } else {
    document.getElementById(
      "result"
    )!.innerHTML = `<strong>No</strong>, '${word}' is not a palindrome.`;
  }
}

// console.log(checkPalindrom('hello'));
// console.log(checkPalindrom('abba'));
