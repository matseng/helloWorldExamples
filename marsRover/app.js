// The input will be provided to your program via standard input.

// The first line contains integer N, the number of bytes in the original file.

// The second line contains integer L, the latency of the connection in seconds.

// The third line contains integer B, the bandwidth of the connection in bytes per second.

// The fourth line contains integer C, the number of chunks.

// C lines follow, each formatted as A,B, with integer A being the byte index of the start of the chunk, and integer B being the byte index of the end of the chunk. These are zero-indexed byte intervals [A, B), meaning that they contain all byte indices i, such that A <= i < B.

// Object.defineProperty(Array.prototype, 'last', function() {
//   return this[this.length - 1];
// });

var input = {
  N: 2000,
  L: 15,
  B: 10,
  c: 7,
  chunks: [
    [0,200],
    [200,400],
    [400,600],
    [600,800],
    [800,1000],
    [1000,2000],
    [0,1800]]
}

function sortChunks(arr) {
  arr.sort(function(a, b) {
    var a0 = a[0];
    var b0 = b[0];
    return b0 < a0;  //sorts is ascending order
  });
};

function doesOverlapOnce(subject, target) {
  if(!subject) return false;
  var subjectTail = subject[0];
  var subjectHead = subject[1];
  var targetTail = target[0];
  var targetHead = target[1];
  if(subjectTail < targetTail && targetTail <= subjectHead && subjectHead < targetHead) {
    return true;
  }
  return false;
}

// Array.prototype.last = function() {
//   return this[this.length - 1];
// };
// Object.defineProperty(Array.prototype, "last", {enumerable: false});

function getLastElement(arr) {
  return arr[arr.length - 1];
};



sortChunks(input.chunks);
console.log(input.chunks);
console.log(input.chunks[0], input.chunks[6], doesOverlapOnce(input.chunks[0], input.chunks[6]));
console.log(input.chunks[0], input.chunks[2], doesOverlapOnce(input.chunks[0], input.chunks[2]));
console.log(input.chunks[1], input.chunks[6], doesOverlapOnce(input.chunks[1], input.chunks[6]));

var printAllSolutions = function(input) {
  var recur = function(result, bag, index) {
    var length = bag.length;
    for(var i = index; i < length; i++) {
      var chunk = bag[i];
      if((result.length === 0 && chunk[0] === 0) || doesOverlapOnce(getLastElement(result), chunk)) {
        result.push(chunk);
        if(getLastElement(result)[1] === input.N){
          console.log(result.join(", "));
        } else if (bag.length > 0) {
          recur(result, bag, i + 1);
        }
        result.pop();
      }
    }
  }
  recur([], input.chunks, 0);
};

printAllSolutions(input);
// 2000
// 5
// 10
// 7
// 0,200
// 200,400
// 400,600
// 600,800
// 800,1000
// 1000,2000
// 0,1800





//BRUTE FORCE: get all subsets of length N to 1
//check for complete coverage
//Modification:
  //Sort array by tail position

var printAllSubsets = function(inputStr) {
  var recur = function(result, bag, index) {
    var length = bag.length;
    for(var i = index; i < length; i++) {
      var curr = bag[i];
      result.push(curr);
      console.log(result.join(''));
      if(bag.length > 0) {
        recur(result, bag, i + 1);
      }
      result.pop();
    }
   };

  var arr = inputStr.split("");
  recur([], arr, 0);
};

printAllSubsets('abc');









// import java.io.*;
// public class Solution {
//     public static void main(String args[] ) throws Exception {
//         /* Enter your code here. Read input from STDIN. Print output to STDOUT */
//     }
// }





var Chunk = function(start, end) {
  this.start = start;
  this.end = end;
  this.length = end - start;
}

// function processData(input) {
//     var i;
//     for (i = 0; i < parseInt(input); i++) {
//         console.log("hello world");
//     }
// }

// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// _input = "";
// process.stdin.on("data", function (input) {
//     _input += input;
// });

// process.stdin.on("end", function () {
//    processData(_input);
// });

