/*
* http://trephine.org/t/index.php?title=JavaScript_loop_closures
*/

//Initial problem:
var list = [ 'a1', 'b2', 'c3' ];

for (var i = 0; i < list.length; i++) {
  var item = list[i];
  setTimeout( function(){ console.log(item); }, 1000 );  //Logs C each time, despite the value of item changing
}
// If you're wondering how that could be, consider that variables in JavaScript are scoped by their containing function, not the containing "block". 
// The following snippet is logically equivalent to the previous, but more explicitly shows the variable scope boundaries by listing them all outside the for loop:

//Initial problem re-stated:
var list = [ 'a', 'b', 'c' ];
var i, l=list.length, item;  //notice how item is scoped OUTSIDE it's containing block (bc that's how JS works!)
for (i=0; i<l; i++) {
  item = list[i];
  setTimeout( function(){ console.log(item); }, 1000 );  //Same as above: Logs C each time, despite the value of item changing
}

//Solution 1: using bind
var func1 = function(myItem) {
    console.log(myItem);
};
for (var i = 0; i < list.length; i++) {
  var item = list[i];
  setTimeout( func1.bind(this, item) , 1000 );
}

//Solution 2:
var func2 = function(myItem) {
  return function() {
    console.log(myItem);
  }
};
for (var i = 0; i < list.length; i++) {
  var item = list[i];
  setTimeout(func2(item), 1000 ); 
}

// Solution 3:
for(var i = 0; i < list.length; i++) {
  var item = list[i];
  (function(item){
    setTimeout(function(){console.log(item);}, 1000)
  })(item);
}

