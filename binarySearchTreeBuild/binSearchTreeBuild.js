//Take an unsorted array --> build a balanced binary search tree

var Tree = function(val) {
  this.value = val;
  this.left;
  this.right;
};

var buildBST = function(arr) {
  //Sort array, median value will be root node
    //then left and right trees of root nodes are median values of left and right halves respectively
    //recurse over left and right trees
  //base case: array element has already been added to the tree
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
  recur(tree, 0, arrSorted.length - 1);
  return tree;
}

Tree.prototype.depthFirstArray = function() {
  var result = [];
  // if(!this.left && !this.right)
  var recur = function(tree) {
    result.push(tree.value);
    if(tree.left)
      recur(tree.left);
    if(tree.right)
      recur(tree.right);
  };

  recur(this);

  return result;
};

Tree.prototype.breadthFirstArray = function() {
  //iterate over current queue to get their children and add each child to a new queue
  //recur over new queue
  var result = [];

  var recur = function(q1) {
    var queue2 = [];
    for(var i = 0; i < q1.length; i++) {
      result.push(q1[i].value);
      if(q1[i].left){
        queue2.push(q1[i].left);
      }
      if(q1[i].right) {
        queue2.push(q1[i].right);
      }
    }
    if(queue2.length > 0)
      recur(queue2);
  };
  
  recur([this]);

  return result;
};

// var a = [12, -15, 2, 0, 0, 5, 7];
var a = [1,2,3,4,5,6,7];
// console.log(a.sort());
var myTree = buildBST(a);
console.log(myTree);
console.log(myTree.depthFirstArray());
console.log(myTree.breadthFirstArray());
