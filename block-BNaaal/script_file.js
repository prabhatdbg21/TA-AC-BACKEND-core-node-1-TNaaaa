var http = require ('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    // handle request
    res.end('welcome Prabhat')
}

server.listen(4000, () => {                               
    console.log('server listening on port 4000')
})