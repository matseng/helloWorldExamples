//Take an unsorted array --> build a balanced binary search tree

var Tree = function(val) {
  this.value = val;
  this.left;
  this.right;
};

var buildBST = function(arr) {
  //Sort tree, median value is root note
    //then left and right trees of root nodes are median values of left and right halves respectively
    //recurse over left and right trees
  //base case: single value left, but it's already been added
  // return root of tree
  //consider off-by-one when dividing trees and using start and end indices

  var arrSorted = arr.sort(function(a,b){
    return a - b;
  });
  console.log(arrSorted);
  var start, end;
  var medianIndex;
  var currVal;
  var recur = function(tree, start, end) {
    medianIndex = Math.floor((start + end) / 2);
    currVal = arrSorted[medianIndex];

    tree.value = currVal;
    var leftEnd = medianIndex - 1;
    var rightStart = medianIndex + 1;
    if(leftEnd >= start) {
      tree.left = new Tree();
      recur(tree.left, start, leftEnd);
    }
    if(rightStart <= end){
      tree.right = new Tree();
      recur(tree.right, rightStart, end);
    }
  };

  var tree = new Tree();
  recur(tree, 0, arrSorted.length);
  return tree;
}

var depthFirstPrint = function() {
  
}

var a = [12, -15, 2, 0, 0, 5, 7];
// var a = [1,2,3];
// console.log(a.sort());
var myTree = buildBST(a);
console.log(myTree);
