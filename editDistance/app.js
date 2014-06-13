// editDistance
/*
Find the number of operations ("edit distance") required to convert from one string to another string.
Edit operations include: insert, delete, substitute, swap
Example insertion, to convert "he" into "the", simply insert "t" to the begining of "he": 
  console.log(editDistance("he", "the"), editDistance("he", "the") === 1); 
  console.log(editDistance("he", "thee"), editDistance("he", "thee") === 2); 
Example substitution:
  console.log(editDistance("she", "the"), editDistance("she", "the") === 1); 
Example swap:
  console.log(editDistance("hte", "the"), editDistance("hte", "the") === 1); 
A slightly more complicated example:
  console.log(editDistance("her", "thee"), editDistance("her", "thee") === 2); 
*/

/*
- Calc length of each string argument
- Difference in string length is number of required insertions
- Helper to determine number of possible insertions...
  _he, h_e, he_
- Iterate over shorter string
- At each character, do each possible operation (ignore delete bc we're working on the shorter string) 
*/
String.prototype.insert = function(subject, index) {
  index = index || 0;
  var targetArr = this.split("");
  targetArr.splice(index, 0, subject);
  return targetArr.join("");
};

function insertSpace(str1, str2) {
  var shorterStr, longerStr;
  var lengthDifference;
  var i = 0;
  if(str1.length <= str2.length) {
    shorterStr = str1;
    longerStr = str2;
  } else {
    shorterStr = str2;
    longerStr = str1;
  }
  lengthDifference = longerStr - shorterStr;

  function recur(shorterStr, longerStr) {
    for(var i = 0; i <= longerStr.length; i++) {
      longerStrCopy = longerStr.slice();
      longerStrCopy = longerStrCopy.insert("_", i);
      console.log(longerStrCopy);
    }
  }
  recur(shorterStr, longerStr);

};

insertSpace("a", "b");


