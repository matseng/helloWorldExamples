// app2.js

var memo = {};

// var fib = function(n) {
function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if ( !(n in memo) ) {
    return memo[n] = fib(n - 1) + fib(n - 2);
  }
  return memo[n];
};

console.log(fib(10));
