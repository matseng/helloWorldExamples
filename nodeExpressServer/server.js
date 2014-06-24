/*
* To initialize this repo from the package.json file: $ npm install
* Add .gitignore file prior to pushing to github (to ignore bulky node_modules folder) 
* From command line, $ node server.js  or $ nodemon server.js
* From browser address bar: http://localhost:3000/helloWorld
*/

var express = require('express');
var app = express();

app.use(express.logger('dev')); // log every request to the console

app.get('/', function(req, res){
  res.header("Access-Control-Allow-Origin", "*");  // required to allow CORs
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.send('Try typing in http://localhost:3000/helloWorld');
});

app.get('/helloWorld', function(req, res){
  res.send('Hello World, again!');
});

var port =  process.env.PORT || 3000;  // Useful for deployment?
var server = app.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
});
