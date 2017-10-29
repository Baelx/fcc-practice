
function rot13(str) { // LBH QVQ VG!
  var arr = str.split("");
  var charcodes = [];
  var decoded = [];

  arr.forEach(function(val){
    if (val.charCodeAt(0) >= 65 && val.charCodeAt(0) <= 77){
      charcodes.push(val.charCodeAt(0) + 13);
    } else if (val.charCodeAt(0) >= 78 && val.charCodeAt(0) <= 90){
      charcodes.push(val.charCodeAt(0) - 13);
    } else {
      charcodes.push(val.charCodeAt(0));
    }
  });

  charcodes.forEach(function(val){
    decoded.push(String.fromCharCode(val));
  });

  return decoded.join("");
};

// Change the inputs below to test
rot13("SERR PBQR PNZC");

/* Articles Used:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
*/

//Other solutions and discussion: https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-caesars-cipher/16003
