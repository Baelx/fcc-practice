function largestOfFour(arr) {
  var largestNums = arr.map(function(item) {
    return item.sort(function(a, b) {
      return a - b;
    }).pop();
  });
  return largestNums;
}
largestOfFour([
  [4, 5, 1, 3, 51, 15, 109, 31],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);

//Other solutions here: https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-return-largest-numbers-in-arrays/16042
