//Refactor post interview with Andrew Cantino from MavenLink on 29April2014
var fib = {
  memo: {},
  compute: function(n) {
    // console.log('hello world:', n);
    if(n == 0)
      return 0;
    if(n == 1)
      return 1;
    if(!(n in fib.memo)) {
      fib.memo[n] = fib.compute(n-1) + fib.compute(n-2);
    }
    return fib.memo[n];
  },
};


console.log(fib.compute(256));

//             10                1
//        9         8            2
//    8     7     7    6         4
// 7    6  6  5  6 5  5  4       8
//            O(2^n)

console.log(fib.compute(0), fib.compute(0) === 0);
console.log(fib.compute(1), fib.compute(1) === 1);
console.log(fib.compute(2), fib.compute(1) === 1);

console.log(fib.compute(5), fib.compute(5) === 5);
console.log(fib.compute(6), fib.compute(6) === 8);
console.log(fib.compute(10), fib.compute(10) === 55);
