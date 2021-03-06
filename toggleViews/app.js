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
  }
};


$('#allNotesContainer').on('click', function(){
  var elementClickedId = event.srcElement.id;
  var menuButtonCheckedId = $("#menuContainer .btn-group :checked").attr('id');
  if( elementClickedId === 'allNotesContainer' && menuButtonCheckedId === 'newNote') {
    var noteContainer = $(document.getElementById('noteTemplate').content.cloneNode(true).children);
    var x = event.clientX;
    var y = event.clientY;
    noteContainer.css({'position': 'absolute', 'left': x, 'top': y});
    $('#allNotesContainer').append(noteContainer);
    $('.textContent').focus();
    $('.textContent').on('focusout', function(){
      $(this).attr('disabled', true);  //textarea is no longer editable - user will need to click edit
      console.log('Will "autosave" in the future');
    });
  }
});

var NewNoteController = function(){
  this.addNewNote: addNewNote;
  this.addNewNoteListeners: 
};


$('#noteContainer').on('mousedown', function(){
  debugger
});



var editButtonClicked = function(){
  var elClicked = $(event.srcElement);
  var textContent = elClicked.parent().parent().find('.textContent');
  textContent.attr('disabled', false);
  // textContent.blur();
  // textContent.select();
  // textContent.focus();
  //elClicked.parent().find('.textContent').focus();
};

var deleteButtonClicked = function(){
  if(confirm("Confirm delete?")){
    var elClicked = $(event.srcElement);
    var noteContainer = elClicked.parent().parent();
    var detached = noteContainer.detach();
  }
};




/*
* Main
*/
