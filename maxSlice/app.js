// From Hired.com tech screen
// https://coderpad.io/DRY4Y3ZE
// You are asked to write a max_slice function which takes as an input an array of integers, and returns the slice with the largest sum of the elements

// [1, 2, 3, -4, 5]
// iter i
// find all slices for current i
// sum of slice
// find max of sum and save the most recent best slice


var max_slice = function(arr) {
  var currSum;
  var currMax = null;
  var best = [];
  
  for(var i = 0; i < arr.length; i++) {
    for(var j = i + 1; j <= arr.length; j++) {
      var sliced = arr.slice(i, j);
      currSum = sum(sliced);
      if(currMax === null || currSum > currMax) {
        best = sliced;
        currMax = currSum;
      }
    }
  }
  return best;
};
  
function sum(arr) {
  var sum = 0;
  for(var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function expect(a, b) {
  if(a != b) {
    console.log("expected " + a + ", got " + b);
  } else{
    console.log("passed: " + a + ' equals ' + b);  //usually don't log tests that pass, but included here for clarity
  }
}

function ems(a, b) {
  expect(JSON.stringify(a), JSON.stringify(max_slice(b)));
}

ems([1, 2], [1, 2]);
ems([1], [1]);
ems([2], [1, -5, 2]);
ems([1], [-100, 1])
ems([1], [1, -100])
ems([], []);
ems([1], [-100, 1, -100])
ems([5], [-100, 1, -100, 5])
ems([5], [5, -100, 1, -100])
ems([5, -1, 5], [5, -1, 5, -100])
ems([5, -1, 5], [-50, 5, -1, 5, -100])
ems([-100], [-1000, -100, -5000])
