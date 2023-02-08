var http = require ('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    var parsedUrl = url.parse(req.url);
    var pathname = parsedUrl.pathname;

    if(req.method === 'GET' && pathname === '/file') {
        res.setHeader('Content-Type' , 'text/html'); 
        fs.readFile('./node.html' , (err, content) => {
            if(err) {
                console.log(err);
            }
            res.end(content); // convert buffer to html
        })
    } else if(req.method === 'GET' && pathname === '/stream') {
        res.setHeader('Content-Type' , 'text/html'); 
        fs.createReadStream('./node.html').pipe(res) //  
    } else {
        res.writeHead(404, {'Content-Type': "text/html"});    // page not found
        res.end('<h2>Page not Found</h2>');
    }
}

server.listen(5555, () => {
    console.log('server listening on port 5555')
});