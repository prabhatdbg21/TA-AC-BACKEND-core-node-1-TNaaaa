var http = require ('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    console.log(req.headers);
    console.log(req.method, req.url);
    // handle request
}

server.listen(3000)