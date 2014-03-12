// app.js

/*
* Model
*/
var TextModel = function(str){
  this.text = str;
};

TextModel.prototype.getText = function(){
  return this.text;
};

TextModel.prototype.setText = function(inputText){
  this.text = inputText;
};

// $('#myTextArea').on('change', function(){

// });


/*
* View (see HTML)
*/


/*
* Controller
*/
var Controller = {
  submitText: function(){
    var parentNode = $(event.srcElement.parentNode);
    var textAreaString = parentNode.children('.textContent').val();
    var targetNode = $('#viewTextContainer .textContent');
    targetNode.text(textAreaString);
    // debugger;
    //   <div id='viewTextContainer'>
    // <div class='textContent'>
  }
};


/*
* Main
*/
