var http = require('http');
var url = require('url');

http.createServer(function (rep, res) {
    res.writeHead(200, {'Content-Type' :  'text/html'});
    var q = url.parse(rep.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt)
}).listen(8080);