//Adapted from http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/

var user = {
  data:[
    {name: "T. Woods", age: 37},
    {name: "P. Mickelson", age: 43},
    {name: "M. Tseng", age: 31}
  ],
  currentCeleb: null,
  previousRandomNum: null,
  clickHandler: function (event) {
    var randomNum = this.previousRandomNum;
    while(randomNum === this.previousRandomNum){
      randomNum = Math.floor(Math.random() * this.data.length);
    }
    this.previousRandomNum = randomNum;
    console.log(randomNum);
    this.currentCeleb = this.data[randomNum];
    $("input").val(this.currentCeleb.name + ", " + this.currentCeleb.age);
  },
  printCurrentCeleb: function() {
    console.log(this.currentCeleb);
  }
}

user.clickHandler();
console.log("Expect: " + (typeof $('input').val() === 'string'));

/*
*
*Problem statement: the method user.clickHandler will be invoked in the context of the button (as opposed to the user object)
* 
*/
// $("button").click(user.clickHandler);  //Problem: invokes method in the context of the window
$("button").click(user.printCurrentCeleb);  //Problem: prints 'undefined' bc this.currentCeleb in the invoked method is undefined in the context of the window

//Solution 1 of 2
// $("button").click(user.clickHandler.bind(user));
$("button").click(user.printCurrentCeleb.bind(user));

//Solution 2 of 2
$("button").click(function() {user.clickHandler()});
