function toTitleCase(str) {
  var firstLetters = [];
  var caps = [];
  var restOfWords = [];
  var lowCase = [];
  var titleCase = [];
  var newSentence;
  var myArr = str.split(" ");
  for (i = 0; i < myArr.length; i++) {
    firstLetters.push(myArr[i].slice(0,1));
    restOfWords.push(myArr[i].slice(1));
    lowCase[i] = restOfWords[i].toLowerCase();
    caps[i] = firstLetters[i].toUpperCase();
    titleCase[i] = caps[i].concat(lowCase[i]);
    newSentence = titleCase.join(' ');
  }
  return newSentence;
}

toTitleCase("I'm a little tea pot");
toTitleCase("ShiveR mE TIMBERS");
toTitleCase("sHoRt AnD sToUt");
toTitleCase('HERE IS MY HANDLE HERE IS MY SPOUT');
