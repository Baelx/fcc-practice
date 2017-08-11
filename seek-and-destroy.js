function destroyer(arr) {
  // Remove all the values
  return arr.filter(function(n){
  return n.typeof;
})
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

//using filter and attributes object
//filter will use function parameters as array values
//
