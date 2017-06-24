<<<<<<< HEAD

  String.prototype.replaceAt = function(index, character) {
      return this.substr(0, index) + character + this.substr(index+character.length);
  };
  function titleCase(str) {
      var newTitle = str.split(' ');
      var updatedTitle = [];
      for (var st in newTitle) {
          updatedTitle[st] = newTitle[st].toLowerCase().replaceAt(0, newTitle[st].charAt(0).toUpperCase());
      }
      return updatedTitle.join(' ');
  }


titleCase("I'm a little tea pot");
titleCase("ShiveR mE TIMBERS");
titleCase("sHoRt AnD sToUt");
titleCase('HERE IS MY HANDLE HERE IS MY SPOUT');
=======
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
>>>>>>> d937d1ab112a40a80c2d11f98d9607180668ce85
