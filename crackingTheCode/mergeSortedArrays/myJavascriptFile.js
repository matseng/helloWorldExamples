//From Cracking the Coding Interview
//Merge sorted array A and B
//A has enough buffer to store all of B (not relevant in Javascript)

var arr1 = [-19, 0, 0, 1, 2, 3, 99];
var arr2 = [-77, 98, 101];

//Splice values from arr2 into arr1
//Keep track of current index of arr1 and arr2, i and j respectively
//Compare vals, if arr1[i] > arr2[j] then splice val2 AND increment both i and j
  //if val1 < val2 then increment i and repeat

var mergeSortedInPlace = function(arr1, arr2) {
  var i = 0;
  var j = 0;
  while(j < arr2.length) {
    if(arr1[i] >= arr2[j] || i >= arr1.length){
      arr1.splice(i, 0, arr2[j]);
      i++;
      j++;
    } else {
      i++;
    }
  };
  return arr1;
};

mergeSortedInPlace(arr1, arr2);
console.log(arr1);
