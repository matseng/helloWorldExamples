// editDistance
/*
Find the minimum number of operations ("edit distance") required to convert from one string to another string.
Edit operations include: insert, delete, substitute, swap
Example insertion, to convert "he" into "the", simply insert "t" to the begining of "he": 
  console.log(editDistance("he", "the"), editDistance("he", "the") === 1); 
  console.log(editDistance("he", "thee"), editDistance("he", "thee") === 2); 
  console.log(editDistance("hi", "thee"), editDistance("hi", "thee") === 3); 
Example substitution:
  console.log(editDistance("she", "the"), editDistance("she", "the") === 1); 
Example swap:
  console.log(editDistance("hte", "the"), editDistance("hte", "the") === 1); 
A slightly more complicated example:
  console.log(editDistance("her", "thee"), editDistance("her", "thee") === 2); 
*/

/* TODO:
- Calc length of each string argument
- Difference in string length is number of required insertions
- Helper to determine number of possible insertions...
  _he, h_e, he_
- Iterate over shorter string
- At each character, do each possible operation (ignore delete bc we're working on the shorter string) 
--
New thought process: create "board" object, which is an array with the shorter strings and blanks if necessary
- Another property is the target string
- Keep track of distance
- Methods for swap and unswap
- Find min distance (edit distance)
- Length of string - 1 is max number of swaps
*/

function Board() {
  this.board = [];
  this.target = null;
  this.maxLength = null;
};

Board.prototype.initializeBoard = function(str1, str2, offset) {
  var strTemp;
  if(str1.length > str2.length) {
    strTemp = str1;
    str1 = str2;
    str2 = strTemp;
  }
  this.target = str2;
  this.maxLength = this.target.length;
  this.board = str1.split("");
};

Board.prototype.getLength = function() {
  return this.board.length;
};

Board.prototype.print = function() {
  console.log(this.board);
};

Board.prototype.insert = function(i) {
  this.board.splice(i, 0, "*");
};

Board.prototype.insertUndo = function(i) {
  this.board.splice(i, 1);
};

Board.prototype.swap = function(i) {
  var tempTile = this.board[i];
  this.board[i] = this.board[i+1];
  this.board[i+1] = tempTile;
}

function run() {
  var str1 = 'he';
  var str2 = 'thee';
  var board = new Board();
  var length;
  var swapCount = 0;
  var swapMax;
  board.initializeBoard(str1, str2);
  console.log(board.board);
  function makeAMove() {
    length = board.getLength();
    //Insert a tile a each position:
    for(var i = 0; i <= length; i++) {
      board.insert(i);
      board.print();
      if(board.getLength() < board.maxLength){
        makeAMove();
      }
      board.insertUndo(i);
    }
    //Swap each tile and its neighbor on the right
    for(var i = swapOffset; i < length - 1; i++) {
      
      board.swap(i);
      swapCount += 1;
      board.print();
      if(swapCount <= swapMax){

      }
    }
  }
  makeAMove();
};

run();






































// String.prototype.insert = function(subject, index) {
//   index = index || 0;
//   var targetArr = this.split("");
//   targetArr.splice(index, 0, subject);
//   return targetArr.join("");
// };

// function insertSpace(str1, str2) {
//   var shorterStr, longerStr;
//   var lengthDifference;
//   var i = 0;
//   if(str1.length <= str2.length) {
//     shorterStr = str1;
//     longerStr = str2;
//   } else {
//     shorterStr = str2;
//     longerStr = str1;
//   }
//   lengthDifference = longerStr - shorterStr;

//   function recur(shorterStr, longerStr) {
//     for(var i = 0; i <= longerStr.length; i++) {
//       longerStrCopy = longerStr.slice();
//       longerStrCopy = longerStrCopy.insert("_", i);
//       console.log(longerStrCopy);
//     }
//   }
//   recur(shorterStr, longerStr);

// };



// insertSpace("a", "b");


