var fibonacci = function(n){
  if (n <= 1)
    return 1;
  return fibonacci(n-1) + fibonacci(n-2);
}


//0,1, 1,1, 2,2, 3,3, 4,5, 5,8, 6,13, 7,21, 8,34, 9,55

function fibForLoop(n) {
  var sumPrev = 1;
  var sum = 1;
  var sumTemp;
  for(var i = 2; i <= n; i++) {
    sumTemp = sum;
    sum = sum + sumPrev;
    sumPrev = sumTemp;
  }
  return sum;
};

var n = 9;
console.log(fibonacci(n));
console.log(fibForLoop(n));
