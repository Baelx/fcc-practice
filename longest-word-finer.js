function findLongestWord(str) {
  var longest;
  var wordArray = str.split(" ");
  var lengths = wordArray.map(function(word) {
    return word.length;
  });

  lengths.sort(function(a, b) {
    return b - a;
  });
  longest = lengths[0];
  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
findLongestWord("Thsdde quddick browssn fox jug");
