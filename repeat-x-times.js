function repeatStringNumTimes(str, num) {
  return num > 0 ? str.repeat(num) : '';
}

repeatStringNumTimes("abc", 3);

//Other solutions: https://forum.freecodecamp.com/t/freecodecamp-algorithm-challenge-guide-repeat-a-string/16041
//Ternary operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
