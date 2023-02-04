var http = require ('http');

var server = http.createServer(handleRequest);

function handleRequest (req, res) {
    console.log(req.method);
    // handle request
    res.writeHead(201, {'Content-Type': 'text/html'});
    res.write('<h1> Prabhat </h1>');
    res.write('<p> Prabhat Kumar Jha </p>');
    res.end();
}

server.listen(4444)