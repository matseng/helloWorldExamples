//scale and translate a div using CSS matrix

//transform: matrix(scaleX, 0, 0, scaleY, tx, ty);


var scale = 5;
var tx = 100;
var ty = 500;
var divTransform = function() {
  var shape = document.getElementsByClassName('myRect')[0];
  var trans = "-webkit-transform: matrix(" + scale + ", 0, 0, " + scale + ", " + tx + ', ' + ty +')';
  shape.setAttribute('style', trans);
  //var transInverse = "-webkit-transform: matrix(" + 1/scale + ", 0, 0, " + 1/scale + ", " + 0 + ', ' + 0 +')';
  //shape.setAttribute('style', transInverse);
};

divTransform();