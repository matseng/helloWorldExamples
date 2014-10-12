// equation: f(x) = x^4 - 3x^3 + 2
// derivative f'(x) = 4x^3 - 9x^2

var min = gradientDescent();
console.log(min);

function gradientDescent() {

  var step = 0.01;
  var threshold = 0.00001;
  var xPrev = 0;
  var xNext = 6;
  var xTemp;

  while(delta(xPrev, xNext) > threshold) {
    xPrev = xNext;
    xNext = xNext + (-1) * gradient(xNext) * step;
  }

  return xNext;

  function gradient(x) {
    return 4 * Math.pow(x, 3) - 9 * Math.pow(x, 2);
  };

  function delta(a, b) {
    return Math.sqrt(Math.pow(a - b, 2));
  };
}
