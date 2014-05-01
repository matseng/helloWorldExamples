/*
* http://trephine.org/t/index.php?title=JavaScript_loop_closures
*/

//Initial problem:
var list = [ 'a1', 'b2', 'c3' ];

for (var i = 0; i < list.length; i++) {
  var item = list[i];
  setTimeout( function(){ console.log(item); }, 1000 );  //Logs current value of item each time, which points to 'c3'
}

//Solution 1: using bind
var func1 = function(myItem) {
    console.log(myItem);
};
for (var i = 0; i < list.length; i++) {
  var item = list[i];
  setTimeout( func1.bind(this, item) , 1000 );  //Logs C each time, despite the value of item changing 
}

//Solution 2:
var func2 = function(myItem) {
  return function() {
    console.log(myItem);
  }
};
for (var i = 0; i < list.length; i++) {
  var item = list[i];
  setTimeout(func2(item), 1000 );  //Logs C each time, despite the value of item changing 
}
