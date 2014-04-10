//Cracking The Code (book) problem 4.1
var Tree = function(val) {
  this.value = val;
  this.left;
  this.right;

}

Tree.prototype.checkBalanced = function() {
  var depthLeft = this.left.getDepth();
  var depthRight = this.right.getDepth();
  var absDiff = Math.abs(depthLeft - depthRight);
  if(absDiff <= 1)
    return true;
  return false;
};

Tree.prototype.getDepth = function() {
  var maxDepth = 0;
  // var currDepth;

  var recur = function(tree, currDepth) {
    if(!(tree.left) && !(tree.right)) {  //leaf node found
      if(currDepth > maxDepth)
        maxDepth = currDepth;
    } else {
      if(tree.left){
        currDepth += 1;
        recur(tree.left, currDepth);
      }
      if(tree.right){
        currDepth += 1;
        recur(tree.right, currDepth)
      }
    }
  }
  recur(this, 0);

  return maxDepth;
};

var root = new Tree(5);
var leaf1 = new Tree(3);
root.left = leaf1;
var leaf2 = new Tree(7);
root.right = leaf2;
var leaf3 = new Tree(2);
leaf2.left = leaf3;
var leaf4 = new Tree(1);
leaf3.left = leaf4;
var depth = root.getDepth();
console.log(depth);
var isBalanced = root.checkBalanced();
console.log(isBalanced);

