// find the sum of all prime numbers under UPPER_LIMIT

// find the sum of all prime numbers under UPPER_LIMIT

function sum_of_primes(upper_limit) {
  var sum = 2;
  for(var i = 3; i < upper_limit; i += 2) {
    if( is_prime(i)) {
    sum += i;
}

  return sum;
}

// 23 -> *2,*3,4,*5,6,*7,8,9,10,*11
// 2,3,5,7,11
// 16  -> 2 
// 9 -> 2, 3
var primes = [2];

function is_prime(num) {
  var half = Math.floor(num/2);
  for(var i = 0; i < primes.length;  i++) {
    if(primes[i] > (num / 2)) break;
if(num % primes[i] === 0) return false;
  }
  primes.push(num);
  return true;
}


function fizzbuzz() {
  //mult of 3, print fizz
  //mult of 5, print buzz
  // mult of 3 & 5 print fizzbuzz
  //otherwise print number
  // N = 100
  for(var i = 0; i < 100; i++) {
    
    if(i % 3 === 0){
      if(i % 5 === 0) {
        console.log('fizzbuzz');
      } else {
        console.log('fizz');
      }
    } else if (i % 5 === 0){
      console.log('buzz');
    } else {
      console.log(i);
    }
  //   if(i % 3 === 0 && i % 5 === 0) {
  //     console.log('fizzbuzz');
  //   } else if( i % 3 === 0) {
  //     console.log('fizz');
  //   } else if (i % 5 === 0) {
  //     console.log('buzz');
  //   } else {
  //     console.log(i);
  //   }
  // }
};

fizzbuzz();


