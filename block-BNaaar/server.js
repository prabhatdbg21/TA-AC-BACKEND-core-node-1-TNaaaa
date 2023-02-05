var http = require ('http');
var url = require('url');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    var parsedUrl = url.parse(req.url);
    var pathname = parsedUrl.pathname;

    if(req.method === 'GET' && pathname === '/') {
        res.write('welcome to homepage')
        res.end()
    } else if(req.method === 'GET' && pathname === '/about') {
        res.setHeader('Content-Type' , 'text/html'); 
        res.end('<h2> this is all about NodeJS </h2>');
    } else if(req.method === 'POST' && pathname === '/about') {
        res.setHeader('Content-type', 'application/json');
        res.end('{message: this is a post request}');
    } else {
        res.writeHead(404, {'Content-Type': "text/html"});    // page not found
        res.end('<h2>Page not Found</h2>');
    }
}

server.listen(5001, () => {
    console.log('server listening on port 5001')
})
