// quickSort2.js

function quickSort(arr, left, right) {
  var index;
  // left = left || 0;
  // right = right || (arr.length - 1);  //DANGER: if right is 0, then it will be replaced!!!
  // if (left < right) {
    index = partition(arr, left, right);
    if(left < index)
      quickSort(arr, left, index - 1);
    if(right > index)
      quickSort(arr, index + 1, right);
  // }
};

function swap(arr, i, j) {
  var holder = arr[i];
  arr[i] = arr[j];
  arr[j] = holder;
};

var partition = function(arr, i, j) {
  var k = Math.floor((i + j)/ 2);
  var pivot = arr[k];
  while (i < j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i < j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }
  return i;
}

var a = [3,7,8,4,5,1,2,6,9];
// console.log(a);
// partition(a, 0, a.length - 1);  //NOTE: the correct last index!
// console.log(a);

quickSort(a, 0, a.length - 1);
console.log(a);
