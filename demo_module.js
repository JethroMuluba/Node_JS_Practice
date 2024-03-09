var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are cureently: " + dt.myDateTime())
    res.end('Tu veux en apprendre plus? Cliquer ici');
}).listen(8080);