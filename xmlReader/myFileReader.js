// $ node myFileReader.js
var fs = require('fs');
// var X2JS = require('./xml2jsonModule');  // NOT working b/c node.js doesn't have a window, which is used in the xml to json parser!!
// var x2js = new X2JS();

var ws = fs.createWriteStream(__dirname + '/myNewJSON.js');
// var readStream = fs.createReadStream(__dirname + '/helloworld.txt', 'utf8');
// var readStream = fs.createReadStream(__dirname + '/defaultVisualizationSmall.xml', {encoding: 'utf8'});
var readStream = fs.createReadStream(__dirname + '/defaultVisualizationCleaned.xml', {encoding: 'utf8'});
readStream.on('data', function(chunk) {
  console.log(chunk);
  // var myJson = x2js.xml_str2json(chunk);
  debugger
  ws.write(chunk, 'utf8');
});

