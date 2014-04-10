//mergeSort.js
var mergeSort = function(arr) {
  //TODO: Divide array in halfs, then sort halfs recusively, then merge with a helper function
  //base case: array of length 1 --> return it
    //array of length 2 --> sort it in place
  //Math.floor(arr.length / 2) to determine "middle"
  //return same array (overwrite) 
  var a = [];
  var b = [];
  var middleIndex;

  if(arr.length == 1) {
    return arr;
  } else if(arr.length == 2){
    if(arr[0] > arr[1]){  //swap required
      var temp = arr[0];
      arr[0] = arr[1];
      arr[1] = temp;
    }
      return arr;
  } else {
    middleIndex = Math.floor(arr.length / 2);
    a = arr.slice(0, middleIndex);
    b = arr.slice(middleIndex, arr.length);
    a = mergeSort(a);
    b = mergeSort(b);
    arr = merge(a, b);
  }

  return arr;
};


function merge(a, b) {
  //iterate over a & b with while loop
    //compare vals
      //add smaller val to result array
  //consider off-by-one regarding lengths of array a & b
  var result = [];
  var i = 0;
  var j = 0;

  while(i < a.length || j < b.length){
    if(!a[i]) {
      result.push(b[j]);
      j++;
    } else if (!b[j]) {
      result.push(a[i]);
      i++;
    } else if(a[i] < b[j]) {
      result.push(a[i]);
      i++;
    } else {
      result.push(b[j]);
      j++;
    }
  }
  return result;
};

// var a = [1,2,5];
// var b = [-2, 2, 4, 5];
// console.log(merge(a,b));
var c = [-43, 3, -5, 12, 14, 1, 2, 3, 3];
console.log(c);
var d = mergeSort(c);
console.log(d);



