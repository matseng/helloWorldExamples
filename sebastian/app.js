var array = [1,2,3];

var arrayNickname = array;

var arrayDeepCopy = JSON.parse(JSON.stringify(array));
// var myString = JSON.stringify({name: 'mikey', myKey: function(){console.log("hello world")}});  // CAN'T JSON stringify functions!!! http://www.eslinstructor.net/jsonfn/
// var myObj = JSON.parse(myString);
// myObj.myKey();

console.log(array);
console.log(arrayNickname);

arrayNickname[2] = 'last indice';
arrayDeepCopy[0] = 'first indice';

console.log(arrayNickname);  //[1,2, 'last indice']
console.log(array);  // [1,2,3] (Wrong)
console.log(arrayDeepCopy);

var forEach2 = function(myArr, callback) {

};



