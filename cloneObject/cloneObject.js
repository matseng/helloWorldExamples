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
  var type1 = getType(obj1);
  var type2 = getType(obj2);
  if(type1 !== type2)  //first gate checks rejects objects of different types
    return false;
  //obj1 and obj2 are of same type:
  if(type1 !== 'array' && type1 !== 'object'){
    if(obj1 === obj2)
      return true;
  } else if (type1 === 'array') {
    for(var i = 0; i < obj1.length; i++){
      if(equalValues(obj1[i], obj2[i]) === false)
        return false;
    }
    return true;
  } else { //we have an object that's not an array, string, number, boolean, etc.
      if(Object.keys(obj1).length !== Object.keys(obj2).length)
        return false;
      //Continue as obj1 & obj2 have same number of keys:
      for(var key in obj1){
        if(key in obj2){
          if(equalValues(obj1[key], obj2[key]) === false)
            return false;
        }
      }
      return true;
  }
};

//Initialize objects and clone:
var smallObj = {foo: 'init'};
var myArr = [{1: {2:'hello obj'}},'b','c'];
var originalObj = {0: smallObj, 1: myArr, 2: true, 3: null, 4: undefined, 5: function(){console.log('Anony func');}};
var originalObjClone = deepClone(originalObj);

//Show the intial state of obj:
console.log('Wrong original object (SEE COMMENT): %o', originalObj);  //NOTE: this console log gets does NOT display the correct originl object!
console.log(originalObj); //NOTE: this console DOES display the correct original object

//Mutate 'values' stored in obj:
myArr.push(4);
smallObj.bar = 'fin';  //NOTE: smallObj = {foo: 'changed'} does NOT mutate obj1

//Show the mutated obj and a clone of the original, clean obj:
console.log('Mutated object: %o', originalObj);
console.log('Clone of original object: %o', originalObjClone);  //want originalObjClone to NOT be mutated as well

//Test equal values function:
var testObj1 = [1, null, {foo: 123}];
var testObj2 = [1, undefined, {foo: 123}];
testObj1 = {0: smallObj, 1: myArr, 2: true, 3: null, 4: undefined, 5: function(){console.log('Anony func');}};
testObj1.okToMutate = 'will still be equal';
testObj2 = deepClone(testObj1);
console.log('Test object 1: %o', testObj1);
console.log('Test object 2: %o', testObj2);
console.log('Equal values of test objects: %o', equalValues(testObj1, testObj2));

//Test objects with loops
var parentNode = {};
var childNode = {name: "I'm a child", parent: parentNode, child: null};
_.extend(parentNode, {name: "I'm a parent", parent: null, child: childNode});
console.log("Child node: %o", childNode);
console.log("Parent node: %o", parentNode);

