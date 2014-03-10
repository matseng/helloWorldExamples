
var graphObj = getGraphObject();

var hasTrailingSlash = function(str){
  if(str[str.length - 1] === "/")
    return true;
  return false;
}

var removeTrailingSlashes = function (graphObj) {
  for(var key in graphObj){
    if(hasTrailingSlash(key))
      delete graphObj[key];
    else {
      var arr = graphObj[key];
      for(var i = 0; i < arr.length; i++){
        if(hasTrailingSlash(arr[arr.length - 1]))
          arr.splice(i, 1);
      }
    }
  }
  return graphObj;
}

cleanGraphObj = removeTrailingSlashes(graphObj);
console.log(cleanGraphObj);

//Sum of entire column - the first column in index 1 (one) NOT 0
Matrix.prototype.sumCol = function(j){
  var col = this.col(j);
  var sum = 0;
  col.each(function(val){
    sum += val;
  });
  return sum;
}

//Sets each value of column j to val. Recall that the first column is 1 (one)
Matrix.prototype.setColumn = function(j, val){
  for(var i = 0; i < this.elements.length; i++){
    this.elements[i][j - 1] = val;  
  }
}

Matrix.prototype.setAllToValue = function(x, y, val){
  var arr = [];
  for(var i = 0; i < x; i++){
    var arrRow = [];
    for(var j = 0; j < y; j++){
      arrRow.push(val);
    }
    arr.push(arrRow);
  }
  return Matrix.create(arr);
}

//Dangling nodes do not have outbound links
var getDanglingNodesMatrix = function(M) {
  var length = M.rows();  //same are number of columns
  var dnMatrix = Matrix.Zero(length, length);

  for(var j = 1; j <= length; j++){
    if(M.sumCol(j) === 0){
      dnMatrix.setColumn(j, 1 / length);
    }
  }
  return dnMatrix;
}

var makeVector = function(length, val) {
  var arr = [];
  for(var i = 0; i < length; i++){
    arr.push(val);
  }
  return $V(arr);
}

Vector.prototype.normalize = function() {
 
    var row_length = this.elements.length;
    var t = 0;
 
    for (var i = 0; i < row_length; i++) {
        t += this.elements[i];
    }
 
    return this.multiply((1.0/t));
}

var getEigenVector = function(gMatrix, x, tolerance, maxIterations) {
  var c_old = 0;

  for (var i = 0; i < 100; i++) {
    var x_new = x.normalize();
    var c_new = x_new.elements[0];

    var e = 100 * (c_new - c_old)/c_new;
    if (Math.abs(e) < tolerance) {
      break;
    }

    x = gMatrix.multiply(x_new);
    c_old = c_new;
  }
  return $V(x);
}


var main = function(){
//Left stochastic matrix is a square matrix of nonnegative real numbers, with each column summing to 1.
  var adjacencyMatrix = $M(
    [[0, .5, 0], 
    [1, 0, 0],
    [0, .5, 0]]
  );

  var adjacencyMatrix = $M(
    [[0, 1, 1, 0, 0], 
    [.5, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [.5, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],]
  );

  var dF = 0.85;  //damping factor
  var tolerance = 0.000001;

  var length = adjacencyMatrix.elements[0].length;
  console.log(adjacencyMatrix.inspect());

  var danglingNodesMatrix = getDanglingNodesMatrix(adjacencyMatrix);
  console.log(danglingNodesMatrix.inspect());

  var onesMatrix = Matrix.prototype.setAllToValue(length, length, 1);
  console.log(onesMatrix.inspect());

  var G = (adjacencyMatrix.add(danglingNodesMatrix)).multiply(dF)
    .add(onesMatrix.multiply((1 - dF) / length));
  console.log(G.inspect());


  var x = makeVector(length, 1);  //ones vector will be normalized in subseqent steps
  var eigVector = getEigenVector(G, x, tolerance, 100);
  console.log("Result: " + eigVector.inspect());

}();


/*

[Offset + Matrix] * x = Eig * x 
Count number of nodes -> 1 / sum * 0.15 is offset



[5 x 5] [5 x 1] = [5 x 1]

*/
