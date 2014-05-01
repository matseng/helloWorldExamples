//Adapted from http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/

var user = {
  data:[
    {name: "T. Woods", age: 37},
    {name: "P. Mickelson", age: 43},
    {name: "M. Tseng", age: 31}
  ],
  previousRandomNum: null,
  clickHandler: function (event) {
    var randomNum = this.previousRandomNum;
    while(randomNum === this.previousRandomNum){
      randomNum = Math.floor(Math.random() * this.data.length);
    }
    this.previousRandomNum = randomNum;
    console.log(randomNum);
    $("input").val(this.data[randomNum].name + ", " + this.data[randomNum].age);
  }
}

user.clickHandler();
console.log("Expect: " + (typeof $('input').val() === 'string'));

//Problem statement: the method user.clickHandler will be invoked in the context of the button (as opposed to the user object)
// $("button").click(user.clickHandler);

//Solution 1
// $("button").click(user.clickHandler.bind(user));

//Solution 2
$("button").click(function() {user.clickHandler()});
