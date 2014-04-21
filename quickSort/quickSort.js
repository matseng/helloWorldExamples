//quickSort.js, p.119
//Start with outermost left and right indicies
//Swap left and right values if left val > right val (goal is left < right) 
  //When left and right indices are equal, then recurse over each remaining "half" (don't include middle index)
//Base case when array only have one element (left equals middle or middle equals right  
var arr = [3, 0, 1, 8, 7, 2, 5, 4, 9, 6];
// var arr = [L 3*, 0, 1, 8, 7, 2, 5, 4, 9, 6 R];
// var arr = [L 2, 0, 1, 8, 7, 3* R, 5, 4, 9, 6];
// var arr = [2, 0, 1, L 3*, 7, 8 R, 5, 4, 9, 6];

var swap = function (arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

var pivot = function (arr, left, right) {
  // var pivotIndex = Math.floor((left + right) / 2);
  var pivotIndex = left;
  var pivotVal = arr[pivotIndex];

  while(left < right) {
    while (arr[right] > pivotVal)  //keep searching to find a val on the right that should be on the left
      right -= 1;
    if (right > pivotIndex) {  // swap if right index is greater than pivot index
      swap(arr, pivotIndex, right);
      pivotIndex = right;
    }
    while (arr[left] < pivotVal)
      left += 1;
    if( left < pivotIndex) {
      swap(arr, left, pivotIndex);
      pivotIndex = left;
    }
  }
  return left;
};

var quickSort = function (arr, left, right) {
  left = left || 0;
  right = right || arr.length - 1;
  index = pivot(arr, left, right);  //find pivot index, vals to the left are less than the pivot value, vals to the right are greater than the pivot value
  if(left < index)  //keep sorting as long as left and right are not equal to index
    quickSort(arr, left, index - 1);
  if(right > index)
    quickSort(arr, index + 1, right);
}

quickSort(arr);
console.log(arr);
