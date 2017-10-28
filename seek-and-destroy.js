
function destroyer(arr) {

  var args = Array.prototype.slice.call(arguments, 1);

  var newArr = arguments[0].filter(function(arr){
    return args.indexOf(arr) == -1;
  });

  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3, 5);

/* Articles used:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
*/

//Other solutions found here: https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-seek-and-destroy/16046
