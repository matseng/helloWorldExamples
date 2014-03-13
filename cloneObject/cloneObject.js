var cloneObject = function(obj){
  var cloneObj = {};
  if(Array.isArray(obj)){
    for(var i = 0; i < obj.length; i++){
      cloneObj.
    }
  } else {

    for(var key in obj){
      // var type;
      // if(Array.isArray(obj[key])){
      //   type = 'array';
      // } else if(obj[key] === null){
      //   type = 'null';
      // }
      // else{
      //   type = typeof obj[key];
      // }
      var type = getType(obj[key]);
      if(type === 'null'){
        cloneObj[key] = null;
      } else if (type === 'array'){
        var arr = obj[key];
        var arrClone = [];
        for(var i = 0; i < arr.length; i++){
          arrClone.push(cloneObject(arr[i]));
        }
        cloneObj[key] = arrClone;
      }
      else if(type !== 'object'){
        cloneObj[key] = obj[key];
      }
      else{
        cloneObj[key] = cloneObject(obj[key]);
      }
    }
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
  //
};

var myArr = [{1: {2:'hello obj'}},'b','c'];
// var myObjTest = {foo: "init"};
// console.log(myObjTest);
var obj = {1: myArr, 2: true, 3: null, 4: undefined, 5: function(){console.log('Anony func');}};
// var obj = {1: myObjTest, 2: true, 3: null, 4: undefined, 5: function(){console.log('Anony func');}};
var obj2 = cloneObject(obj);
myArr.push('has been mutatute here');
// myObjTest.bar = 'fin';
// console.log(myArr);
// console.log(myObjTest);
console.log(obj);
console.log(obj2);  //want obj2 to 'equal' the original myArr