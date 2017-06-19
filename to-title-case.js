function toTitleCase(str) {
  var firstLetters = [];
  var restOfWords = [];
  var myArr = str.split(" ");

  for (i = 0; i < myArr.length; i++) {
    firstLetters.push(myArr[i].slice(0,1).toUpperCase());
    restOfWords.push(myArr[i].slice(1).toLowerCase());
    firstLetters[i] = firstLetters[i].concat(restOfWords[i]);
  }
  return firstLetters.join(' ');
}

toTitleCase("Hello thEre, this is me.");
toTitleCase('ShiVer mE Timbers');