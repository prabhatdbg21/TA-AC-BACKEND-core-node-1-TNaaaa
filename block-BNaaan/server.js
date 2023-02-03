var http = require ('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    console.log(req.headers)
    console.log(req.method, req.url);
    // handle request
    res.end('welcome Prabhat')
}

server.listen(3000, () => {                                // 'localhost' by defoult
    console.log('server listening on port 3000')
})