//Example from http://dailyjs.com/2012/06/18/js101-this/
var Shape = function(x, y) {
  this.x = x;
  this.y = y;
};

Shape.prototype.move = function(dx, dy) {
  this.x += dx;
  this.y += dy;
  var self = this;

  //Option 1: Use self (bc 'this' would refer to the global object)
  // var checkBounds = function(min, max) {
  //   if(self.x < min || self.x > max || self.y < min || self.y > max)
  //     console.error('Warning: shape out of bounds!');
  // };
  //checkBounds(0,100);


  //Option 2: Use 'this' with BIND to set the context to the current shape instance
  // var checkBounds = function(min, max) {
  //   if(this.x < min || this.x > max || this.y < min || this.y > max)
  //     console.error('Warning: shape out of bounds!');
  // }.bind(this);
  // checkBounds(0,100);

  //Option 3: Define checkBounds on 'this'. Caveat is that checkBounds in now a public method
  this.checkBounds = function(min, max) {
    if(this.x < min || this.x > max || this.y < min || this.y > max)
      console.error('Warning: shape out of bounds!');
  };
  this.checkBounds(0,100);
};

var myShape = new Shape(50,50);
console.log(myShape, myShape.x == 50 && myShape.y == 50);
myShape.move(33, 33);
console.log(myShape, myShape.x == 83 && myShape.y == 83);
myShape.move(25, 25);
console.log(myShape, myShape.x == 108 && myShape.y == 108);

/*
* Following example from http://trephine.org/t/index.php?title=JavaScript_call_and_apply
*/

var Alice = {
  name: 'Alice',
  greet: function() {
    console.log('Hi, my name is ' + this.name + '.');  //NOTE: The context is not window... 'this' refers to the context upon which the method was invoked unless otherwise specfified by call, apply or bind
  },
  niceToMeetYou: function() {
    var args = Array.prototype.slice.call(arguments);
    for(var i = 0; i < args.length; i++) {
      console.log("Nice to meet you, " + args[i]);
    }
  }
};

Alice.greet();

var Bob = {
  name: 'Bob'
};

//Option 1 use call to invoke a method with a different context
Alice.greet.call(Bob);  //sets the context ('this') to Bob

//Option 2 use apply to set a new context AND invoke the method with an aray
var amigos = ['Carl B.', 'Dan', 'Eva'];
Alice.niceToMeetYou.call(Bob, 'Carla');
Alice.niceToMeetYou.apply(Bob, amigos);


