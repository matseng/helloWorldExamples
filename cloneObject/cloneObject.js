Object.prototype.cloneObject = function(obj){
  var cloneObj = {};
  for(var key in obj){
    var type;
    if(Array.isArray(obj[key])){
      type = 'array';
    } else if(obj[key] === null){
      type = 'null';
    }
    else{
      type = typeof obj[key];
    }
    if(type === 'null'){
      cloneObj[key] = null;
    }
    else if(type !== 'object'){
      cloneObj[key] = obj[key];
    }
    else{
      cloneObj[key] = cloneObject(obj[key]);
    }
  }
  return cloneObj;
};

var obj = {1:[{1: {2:'hello obj'}},'b','c'], 2: true, 3: null};

var obj2 = obj.cloneObject(obj);

console.log(obj);
console.log(obj2);