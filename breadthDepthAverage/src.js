//Tree breadth first average of depth:


var Tree = function(val) {
  this.value = val;
  this.children = [];
};

Tree.prototype.breadthDepthAverage = function() {

  var result = {};  //key is depth and value is average of that depth

  var recur = function(queue, depth) {
    var nextQueue = [];
    var currTree;
    var runningSum = 0;
    var numOfTrees = queue.length;
    for(var i = 0; i < queue.length; i++) {
      currTree = queue[i];
      runningSum += currTree.value;
      for(var j = 0; j < currTree.children.length; j++) {
        nextQueue.push(currTree.children[j]);
      }
    }
    result[depth] = runningSum / numOfTrees;
    if(nextQueue.length){
      depth += 1;
      recur(nextQueue, depth);
    }
  };

  recur([this], 0);

  return result;
};


Tree.prototype.setValue = function(val) {
  this.value = val;
};

Tree.prototype.get = function() {
  return this.value
};

Tree.prototype.addChild = function(childTree) {
  this.children.push(childTree);
};

var a = new Tree(1);  //vs. var root = Tree() ???  //new is required to return the instance?
var b = new Tree(20);
var c = new Tree(40);
a.addChild(b);
a.addChild(c);
var d = new Tree(60);
var e = new Tree(80);
var f = new Tree(50);
var g = new Tree(90);
b.addChild(d);
b.addChild(e);
c.addChild(f);
c.addChild(g);

console.log(a);
var bda = a.breadthDepthAverage();
console.log(bda);
