

//Rec from Hack Reactor's Facebook page: http://davidshariff.com/blog/javascript-inheritance-patterns/

/**
 * Point a child's prototype to a parent's prototype
 **/

if(!Object.create){
  Object.create = function(o){  // o for proto: The object which should be the prototype of the newly-created object.
    function F(){}
    F.prototype=o;
    return new F();
  }
}

var extendObjProblem1 = function(childObj, parentObj) {
  childObj.prototype = parentObj.prototype;  //Problem: change the child proto actually changes the parent
};

var extendObjProblem2 = function(childObj, parentObj) {
  childObj.prototype = Object.create(parentObj.prototype);  //Problem: Won't inherit attributes (testing1)
};

var extendObj_v1 = function(childObj, parentObj) {
  var tmpObj = function () {}
  tmpObj.prototype = parentObj.prototype;  // will NOT pass this.testing1 to future instances
  childObj.prototype = new tmpObj();  //Seems verbose, necessary?
  childObj.prototype.constructor = childObj;
};

var extendObj_v2 = function(childObj, parentObj) {
  childObj.prototype = new parentObj();  //my favorite solution thus far; includes this.testing1 which can be overwritten as an instance variable
  childObj.prototype.constructor = childObj;
};


// base human object
var Human = function() {
  this.testing1 = 123;
};

// inhertiable attributes / methods
Human.prototype = {
  testing2: 345,
  planetOfBirth: 'Earth',  //I kept earth on the proto bc it should be true of all humans (but we can still change it later if we want to)
  sayGender: function () {
      console.log(this.name + ' says my gender is ' + this.gender);
  },
  sayPlanet: function () {
      console.log(this.name + ' was born on ' + this.planetOfBirth);
  },
  sayTesting1: function() {
    console.log("I'm testing: ", this.testing1);
  },
  sayTesting2: function() {
    console.log("I'm testing: ", this.testing2);
  }

};

// male
var Male = function (name) {
    this.gender = 'Male';
    // this.name = 'David';  //bad example IMHO of using same name for every male
    this.name = name;
};
// inherits human
// extendObj(Male, Human);
extendObj_v1(Male, Human);
// extendObj_v2(Male, Human);
// extendObjProblem1(Male, Human);
// extendObjProblem2(Male, Human);

// female
var Female = function (name) {
    this.name = name;
    this.gender = 'Female';
};
// inherits human
extendObj_v1(Female, Human);
// extendObj_v2(Female, Human);

// new instances
var mike = new Male('Mike');
var david = new Male('David');
var jane = new Female('Jane');

david.sayGender(); // David says my gender is Male
jane.sayGender(); // Jane says my gender is Female
mike.sayGender();

// mike.planetOfBirth = 'Neptune';
mike.sayPlanet();
david.sayPlanet();
Male.prototype.planetOfBirth = 'Mars';
david.sayPlanet(); // David was born on Mars
mike.sayPlanet();
jane.sayPlanet(); // Problem if we use extendObjProblem: Jane was born on Mars

// david.testing = 456;
david.sayTesting1();
david.sayTesting2();
// jane.sayTesting();
