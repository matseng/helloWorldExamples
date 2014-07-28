// http://stackoverflow.com/questions/1646698/what-is-the-new-keyword-in-javascript

//Even more helpful: http://dmitrysoshnikov.com/ecmascript/javascript-the-core/

//Task: Re-implement the 'new' keyword as a function

var Shape = function(x, y) {
  this.x = x;
  this.y = y;
};

var Shape2 = function(x, y) {
  var self = {};
  self.x = x;
  self.y = y;
  self.__proto__ = Shape2.prototype;
  self.constructor = Shape2;
  return self;
}

Shape.prototype.multiply = function() {
  return this.x * this.y;
}

Object.prototype.myCreate = function(func) {
  // var F = {};  //wrong, F should be a function as in the following line
  function F(){};
  F.prototype = func.prototype;
  return f = new F();
}

// function myCreate(func) {
//   // var F = {};  //wrong, F should be a function as in the following line
//   function F(){};
//   F.prototype = func.prototype;
//   return f = new F();
// }
// Object.prototype.myCreate = function(){};
// Object.defineProperty(Object.prototype.myCreate, myCreate, {enumerable: false});

// Shape2.prototype = Object.create(Shape.prototype);
Shape2.prototype = Object.myCreate(Shape.prototype);
//IMPLEMENT:
// var New = function(func) {
//   //return an instance variable of the func (should be a constructor function)
//     //the instance's __proto__ should reference the func's prototype
//     //I think only functions have prototypes, where as other objects have __proto__
//   var instance = {};
//   if(func.prototype !== null) {
//     instance.__proto__ = func.prototype;
//   }

// };

function NewFromStackOverflow(func) {
    var res = {};
    if (func.prototype !== null) {
        res.__proto__ = func.prototype;
    }
    var ret = func.apply(res, Array.prototype.slice.call(arguments, 1));
    if (typeof ret === "object" && ret !== null) {
        return ret;
    }
    return res;
}

function New(func) {
    var res = {};
    if (func.prototype !== null) {
        res.__proto__ = func.prototype;
        // res.constructor = func; //also, make this property non-enumberable?
        Object.defineProperty(res.constructor, func, {enumerable: false});
    }
    var args = Array.prototype.slice.call(arguments, 1);  // [33,50] in this example
    var ret = func.apply(res, args);
    if (typeof ret === "object" && ret !== null) {
        return ret;
    }
    return res;
}

var bar = new Shape(33, 50);
var baz = New(Shape, 33, 50);

var bar2 = Shape2(33, 50);
// var baz2 = New(Shape2, 33, 50);


console.log(bar, baz);
console.log(bar2);

// var baz = New(Foo, )

// console.log(bar, baz);
