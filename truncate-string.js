function truncateString(str, num) {
  var ellipsis = '...';

  if (num >= str.length) {
    return str;
  } else if (num < str.length && num > 3) {
    return str.slice(0, (num - ellipsis.length)).concat(ellipsis);
  } else {
    return str.slice(0, num).concat(ellipsis);
  }


}


truncateString("A-tisket a-tasket A green and yellow basket", 11);
//Add ellipsis and count them in the number
truncateString("A-tisket a-tasket A green and yellow basket", 2);
//Add ellipsis but don't count them
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);

//Other solutions: https://forum.freecodecamp.com/t/freecodecamp-algorithm-challenge-guide-truncate-a-string/16089
