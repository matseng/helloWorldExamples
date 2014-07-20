function coundown(n) {
  if(n === 0) {
    console.log('Happy New Year');
    return;
  } 
  console.log(n);
  coundown(n - 1);
}

coundown(10);

// coundown(300000);  // Uncaught RangeError: Maximum call stack size exceeded 

function coundown2(n) {
  if(n === 0) {
    console.log('Happy New Year');
    return;
  }
  console.log(n);
  setTimeout(function() {  //setImmediate not yet standard
    coundown2(n - 1)
  }, 0);
}

coundown2(10);
coundown2(300000);  //does not result in stack overflow!


// Additional reading: 
// Workaround for lack of "tail call optimization" in JS
// https://gist.github.com/Gozala/1697037
