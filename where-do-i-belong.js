
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.push(num);
  arr.sort(function(a, b) {
  return a - b;
  });
  return arr.indexOf(num);
}

getIndexToIns([2, 20, 10], 19);

/* Articles used:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
*/

//Other solutions and breakdown: https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-where-do-i-belong/16094
