// http://stackoverflow.com/questions/1646698/what-is-the-new-keyword-in-javascript

//Task: Re-implement the 'new' keyword as a function

var Shape = function(x, y){
  this.x = x;
  this.y = y;
};

//IMPLEMENT:
var New = function(func) {
  //return an instance variable of the func (should be a constructor function)
};


var bar = new Shape(33, 50);
var baz = New(Shape, 33, 50)


console.log(bar, baz);

// var baz = New(Foo, )

// console.log(bar, baz);
