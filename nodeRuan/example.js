var http = require('http');
fs = require('fs')

var server = http.createServer(function (req, res) {
  console.log('Request received');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  fs.readFile(__dirname + '/helloworld.txt', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    res.end(data);
  });
});

server.listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
