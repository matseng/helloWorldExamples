var deepClone = function(obj){
  var type = getType(obj);
  window.lookUp = {
    'array': cloneArray,
    'null': cloneNull,
    'object': cloneObject,
    'string': cloneOther,
    'function': cloneOther,
    'boolean': cloneOther,
    'number': cloneOther,
    'undefined': cloneOther
  };
  return window.lookUp[type](obj);
};

var cloneArray = function(arr) {
  var arrClone = [];
  for(var i = 0; i < arr.length; i++){
    arrClone.push(deepClone(arr[i]));
  }
  return arrClone;
};

var cloneNull = function(){
  return null;
};

var cloneOther = function(other){
  return other;
};

var cloneObject = function(obj){
  var cloneObj = {};
  for(var key in obj){
    cloneObj[key] = deepClone(obj[key]);
  }
return cloneObj;
};

var getType = function(val) {
  var type = "";
  if(Array.isArray(val))
    type = 'array';
  else if (val === null)
    type = 'null';
  else
    type = typeof val;
  return type;
};

var equalValues = function(obj1, obj2) {
  //breadth first - compare keys first
    //if all keys are the same, then check values
  for(var key in obj1){
    if( !(key in obj2) )
      return false;
  }
  return true;
};

//Initialize objects and clone
var smallObj = {foo: 'init'};
var myArr = [{1: {2:'hello obj'}},'b','c'];
var obj = {0: smallObj, 1: myArr, 2: true, 3: null, 4: undefined, 5: function(){console.log('Anony func');}};
var myClone = deepClone(obj);
//Show the intial state of obj
console.log('Original object: %o', obj);  //this obj get incorrectly mutated by Chrome!
console.log(obj);
//Mutate 'values' stored in obj
myArr.push(4);
smallObj.bar = 'fin';  //NOTE: smallObj = {foo: 'changed'} does NOT mutate obj1
//Show the mutated obj and a clone of the original, clean obj
console.log('Mutated object: %o', obj);
console.log('Clone of original object: %o', myClone);  //want myClone to NOT be mutated as well
//


