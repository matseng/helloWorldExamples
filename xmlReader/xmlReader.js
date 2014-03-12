/*
Text file reader: http://blog.teamtreehouse.com/reading-files-using-the-html5-filereader-api
XML to JSON: http://jsfiddle.net/abdmob/gtLBx/15/
*/

window.onload = function() {
  var fileInput = document.getElementById('fileInput');
  var fileDisplayArea = document.getElementById('fileDisplayArea');

  fileInput.addEventListener('change', function(e) {
    var file = fileInput.files[0];
    var textType = /text.*/;
    var fireRootRef = new Firebase('https://brainspace-biz.firebaseio.com/');
    var cleanUpObj = function(myJsonObj){
      var lookUp = {
        name: 'title',
        gender: 'notes',
        X: 'left',
        Y: 'top',
        font: 'fontSize',
        webAddress: 'url',
        image: 'imageLocalFile',
        imageSize: 'imageScale',
      };

      for(var i = 0; i < myJsonObj.root.node.length; i++){
        var cleanObj = {};
        var dirtyDataArr = myJsonObj.root.node[i].data;
        for(var j = 0; j < dirtyDataArr.length; j++){
          var dirtyDatum = dirtyDataArr[j];
          var dirtyKey = dirtyDatum['_key'];
          var dirtyVal = dirtyDatum['__text'];
          if( dirtyVal !== "null" && dirtyVal !== undefined && (dirtyKey in lookUp)){
            var cleanKey = lookUp[dirtyKey];
            if(cleanKey === 'left' || cleanKey === 'top' || cleanKey === 'fontSize' || cleanKey === 'imageScale'){
              var dirtyVal = parseInt(dirtyVal)
              if(cleanKey === 'left' || cleanKey === 'top')
                dirtyVal = dirtyVal / 10;
            }
            cleanObj[lookUp[dirtyKey]] = dirtyVal;
          }
        }
        console.log(cleanObj);
        fireRootRef.push(cleanObj, function(err){
          if(err)
            console.log("Data not saved to Firebase: err");
          else 
            console.log("Data successfully saved to Firebase");
        });
      }
    }

    if (file.type.match(textType)) {
      var reader = new FileReader();

      reader.onload = function(e) {
        // fileDisplayArea.innerText = reader.result;
        var x2js = new X2JS();
        var myJsonObj = x2js.xml_str2json(reader.result);
        cleanUpObj(myJsonObj);
      }

      reader.readAsText(file);  
    } else {
      fileDisplayArea.innerText = "File not supported!"
    }
  });
}
