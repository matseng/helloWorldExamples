/*jshint expr:true*/

/**
 * Insertion sort is another basic sorting algorithm. Insertion sort
 * iterates over an array, growing a sorted array behind the current location.
 * It takes each element from the input and finds the spot, up to the current point,
 * where that element belongs. It does this until it gets to the end of the array.
 **/

// Example usage:
// insertionSort([2, 1, 3]); // yields [1, 2, 3]

//iterate forward via index i
  //iterate backward from index i via index j
    //swap adjacent values if current val is less than previous
//be wary of off-by-one errors
//if no swap is necessary, then that subset of the array is sorted and no need to cont iterating back down
//Time complexity: O(n^2)

var insertionSort = function(arr) {
  var currVal;
  var prevVal;
  var temp;
  for(var i = 0; i < arr.length; i++) {
    for(var j = i; j > 0; j--) {
      currVal = arr[j];
      prevVal = arr[j-1];
      if(currVal < prevVal) {
        temp = prevVal;
        arr[j-1] = currVal;
        arr[j] = temp;
      } else {
        break;
      }
    }
  }
  return arr;
};

console.log(insertionSort([2, 1, 17, 9, 3, 0,])); // yields [0, 1, 2, 3, 9, 17] 
