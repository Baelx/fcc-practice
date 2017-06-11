function palindrome(word) {
  var wordArr;
  var reversed;
  var onlyAlphaNums = word.replace(/[^0-9a-z]/gi, '');
  var lowCase = onlyAlphaNums.toLowerCase();
  var noSpaces = lowCase.trim();
  console.log(noSpaces);
  wordArr = noSpaces.split("");
  wordArr.reverse();
  reversed = wordArr.join("");
  if (noSpaces == reversed) {
    console.log("is");
    return true;
  } else {
    console.log("The result is " + word + " and " + reversed);
    console.log("isn't");
    return false;
  }
}
palindrome("/<m0_ - _0m</");
palindrome("hello");
