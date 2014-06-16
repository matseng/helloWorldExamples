//Find all subsets (combinations as opposed to permutations)
// abc: 
//  a, b, c, 
//  ab, ac, bc,
//  bc
//  abc

/*
object of results
sort string before storing it
splice out letter then recur
  splice letter back in
*/

function allSubsets(str) {
  var arr;
  // var currLetter;  //this variable is correctly scoped below
  var result = {};  //use object to avoid repeated entries
  arr = str.split("");
  arr.sort();
  
  var recur = function() {
    var currLetter;
    str = arr.join("");
    if(!(str in result)) {
      result[str] = true;
    }
    for(var i = 0; i < arr.length; i++) {
      currLetter = arr.splice(i, 1)[0];  //splice returns an array --> get first string with [0]
      if(arr.length > 0) {  //conditional prior to recursing
        recur();
      }
      arr.splice(i, 0, currLetter);
    }
  };
  recur();
  return result;
};

var result = allSubsets('abcd');
console.log(result);
