var http = require ('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    var parsedUrl = url.parse(req.url);
    var pathname = parsedUrl.pathname;

    if(req.method === 'GET' && pathname === '/') {
        res.setHeader('Content-Type' , 'text/html'); 
        fs.createReadStream('').pipe(res);
    } else if(req.method === 'GET' && pathname === '/about') {
        res.setHeader('Content-Type' , 'text/html'); 
        fs.createReadStream('./form.html').pipe(res);
    } else {
        res.writeHead(404, {'Content-Type': "text/html"}); 
        res.end('<h2>Page not Found</h2>');
    }
}

server.listen(5001)