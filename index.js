var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Bienvenue dans ma pratique sur Node Js');
}).listen(4000);