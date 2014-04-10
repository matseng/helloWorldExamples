/*
*
* Michael Tseng  4/10/2014
* Interview with Monika@monsoonco.com 
*
*/

//1. fiz buzz challenge
// iter thru 1 -> 100 and print
//check 3 conditions:
  //divisible by three print fizz instead of number
  //div by 5 print buzz
  //if divis by 3 && 5, then print fizz buzz
  //else print number itself

for(var i = 1; i < 101; i++) {
  if((i % 3 == 0) && (i % 5 == 0)){
    console.log("fizz buzz");
  } else if(i % 3 == 0) {
    console.log('fizz');
  } else if(i % 5 == 0){
    console.log('buzz');
  } else {
    console.log(i);
  }
}


//2. write as method: int as arg and returns the factorial of that integer
// no for or while statements, if is ok --> recursive
// 4! = 4*3*2*1
// base case

var factorial = function(num) {
  var result;

  var recur = function(num) {
    if(num == 1)
      return 1;
    return num * recur(num - 1);
  }

  result = recur(num);
  return result;
};

console.log(factorial(5));


//3. Ok to use built in JS method
//string is argument --> reverse 
// ball --> llab
var reverseString = function(str) {
  var arr = str.split('');
  arr.reverse();
  str = arr.join('');
  return str;
};
console.log(reverseString('apple'));





