function chunkArrayInGroups(arr, size) {
  var dividedArray = [];
  var arrLength = arr.length;

  for (var i = 0; i < arrLength / size; i++) {
    dividedArray[i] = arr.splice(0, size);
  }
  if (arrLength.length % size) {
    dividedArray.push(arr);
  }
return dividedArray;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);

//Other solutions: https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-chunky-monkey/16005
