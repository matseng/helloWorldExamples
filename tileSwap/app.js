/*
Given an ordered set of tiles, how many different permutations are there? 
And more importantly, how many adjacent tile swaps did it take to make that permutation?
Example: 
  0 swaps: abc
  1 swap: bac, acb
  2 swaps: bca, cab
  3 swaps: cba   
  Summary: (permutation, # of swaps); (abc, 0), (bac, 1), (acb, 1), (bca, 2), (cab,2), (cba,3)
*/

Array.prototype.swap = function(i) {
  var temp = this[i];
  this[i] = this[i + 1];
  this[i + 1] = temp;
};

function tileSwap(str) {
  var result = {};
  var arr = str.split("");
  var strTemp;
  var swapCounter = 0;
  result[str] = 0;
  var maxSwaps = (arr.length - 1) / 2 * (arr.length - 1 + 1);
  // 4 3 2 1 = 10
  // 5 4 3 2 1 = 15
  // (n / 2) (n+1) = 2.5 + 6

  var recur = function() {
    for(var i = 0; i < arr.length - 1; i++) {
      arr.swap(i);
      strTemp = arr.join("");
      swapCounter += 1;
      if(swapCounter <= maxSwaps && !(strTemp in result) || (strTemp in result && swapCounter < result[strTemp])) {
        console.log(strTemp, swapCounter);
        result[strTemp] = swapCounter;
        recur();
      }
      arr.swap(i);
      swapCounter -= 1;
    }
  }
  recur();
  return result;
};

var result = tileSwap('abcd');
console.log(result);
console.log(Object.keys(result).length);
