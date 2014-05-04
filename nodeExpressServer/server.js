/*
* To initialize this repo from the package.json file: $ npm install
* server.js
* From command line, $ node server.js  or $ nodemon server.js
* From browser address bar: http://localhost:3000/helloWorld
*/

var express = require('express');
var app = express();

app.get('/helloWorld', function(req, res){
  res.send('Hello World');
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
