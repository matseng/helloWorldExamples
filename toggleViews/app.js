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

$('#allNotesContainer').on('click', function(){
  var noteContainer = $(document.getElementById('noteTemplate').content.cloneNode(true).children);
  var x = event.clientX;
  var y = event.clientY;
  noteContainer.css({'position': 'absolute', 'left': x, 'top': y});
  $('#allNotesContainer').append(noteContainer);
});


/*
* Main
*/
