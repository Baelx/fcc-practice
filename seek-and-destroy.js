function destroyer(arr) {
  // Remove all the values
var newArr = arr.filter(function(value){
    console.log(value);
    return value == false;
  });
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
