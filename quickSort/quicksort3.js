function quicksort(arr, i, j) {
  var index;
  index = partition(arr, i, j);
  if(i < index) {
    quicksort(arr, i, index - 1);
  }
  if(j > index) {
    quicksort(arr, index + 1, j);
  }
};

function partition(arr, i, j) {
  // var index = i; // or use getRandomIndex as below
  var index = getRandomIndex(i, j);
  var pivot = arr[index];
  while(i < j) {
    while(arr[i] < pivot) {
      i++;
    }
    while(arr[j] > pivot) {
      j--;
    }
    if(i < j) {
      swapValues(arr, i, j);
    }
  }
  return i;
}

function swapValues(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function getRandomIndex(i, j) {
  var length = j - i + 1;
  return Math.floor(Math.random() * length) + i;
}

var arr = [3, 0, 1, 8, 7, 2, 5, 4, 9, 6];
quicksort(arr, 0, arr.length - 1);
console.log(arr);
