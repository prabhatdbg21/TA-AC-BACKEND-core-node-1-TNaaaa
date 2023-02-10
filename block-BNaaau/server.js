/* 
Q1. Create a basic server using http's createServer
  - listen for request on port 5000
  - console request and response object
  - do a request using browser on `localhost:5000`
  - check out console for request and response object
*/
var http = require ('http');

http.createServer((request, response) => {
    console.log(request, response);
    response.end()
}).listen(5000, 'localhost');   


/*
Q2. create a node server 
  - add listener on port 5100
  - respond with 'My first server in NodeJS' using response object
*/
var http = require ('http');

http.createServer((request, response) => {
    response.end('My first server in NodeJS')
}).listen(5100, 'localhost');   


/*
Q3. write code to create a node server 
  - add listener on port 5555
  - console request headers
  - respond with content of user-agent from request headers.
*/
var http = require ('http');

http.createServer((request, response) => {
    console.log(request.headers);
    response.end()
}).listen(5555, 'localhost');

/*
Q4. write code to create a node server 
  - add listener on port 5566
  - console request url and request method
  - return a text response with requested url and method
*/
var http = require ('http');

http.createServer((request, response) => {
    console.log(request.url, request.method);
    response.end()
}).listen(5566, 'localhost');

/*
Q5. write code to create a node server 
  - add listener on port 7000
  - also add a callback function to listener with a console `server listening on port 7000`
  - return entire request headers in response.
*/
var http = require ('http');

http.createServer((request, response) => {
    console.log(request.headers);
    response.end()
}).listen(7001, () => {
    console.log('server listening on port 7000')
})

/*
Q6. create a server
  - add a listener on port 3333
  - set status code 202 in response using `res.statusCode`.
*/
var http = require ('http');

http.createServer((req, res) => {
    res.statusCode = 202;
    res.end();
}).listen(3333, 'localhost');

/*
Q7. create a server 
  - add a listener on port 8000
  - set appropriate header for html response using `res.setHeader`
  - return an HTML response(`<h3>Welcome to altcampus</h3>`) 
*/
var http = require ('http');

http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h3>Welcome to altcampus</h3>');
}).listen(8000, 'localhost');


/*
Repeat above question using `res.writeHead` to set status code and Content-Type at the same time.
*/
/*
var http = require ('http');

http.createServer((req, res) => {
    res.writeHead(201, {'Content-Type': 'text/html'});
    res.end('<h3>Welcome to altcampus</h3>');
}).listen(8000, 'localhost');
*/


/*
Q8. create a basic node server
  - add a listener at port 8888
  - add appropriate header for json response
  - send json response({success: true, message: 'Welcome to Nodejs'})
*/
var http = require ('http');

http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(`{success: true, message: 'Welcome to Nodejs'}`);
}).listen(8888, 'localhost');

/*
Q9. create a server
  - add listener on port 5050
  - use postman to do a POST request on index route
  - console to check request method
  - send HTML response i.e. `<h2>posted for first time</h2>`
*/
var http = require ('http');

http.createServer((req, res) => {
    if(req.method === 'POST' ){
        console.log(req.method);
        res.setHeader('Content-Type' , 'text/html');
        res.end('<h3>Welcome to altcampus</h3>');
    }
}).listen(5050, 'localhost');

/*
Q10. create a server and handle 2 different requests
  - add a listener on port 2345
  - handle GET request on '/' route where return your name in plain text in response
  - handle GET request on '/about' route and return your name in h2 as HTML page.
  - add a error handler at last to handle request made on other than above routes with a status code of 404.
*/

var http = require ('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    var parsedUrl = url.parse(req.url);
    var pathname = parsedUrl.pathname;

    if(req.method === 'GET' && pathname === '/') {
        res.write('Prabhat')
        res.end()
    } else if(req.method === 'GET' && pathname === '/about') {
        res.setHeader('Content-Type' , 'text/html'); 
        res.end('<h2>Prabhat</h2>');
    } else {
        res.writeHead(404, {'Content-Type': "text/html"}); 
        res.end('<h2>Page not Found</h2>');
    }
}

server.listen(2345)

/*
Q11. Handle 2 requests on same route with different method
    1. GET on '/users' route where return a simple HTML form with name and email field
    2. POST on '/users' route with a message 'Posted for the second time'.
*/
var http = require ('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    var parsedUrl = url.parse(req.url);
    var pathname = parsedUrl.pathname;

    if(req.method === 'GET' && pathname === '/users') {
        res.setHeader('Content-Type' , 'text/html'); 
        res.end('<h2>Prabhat</h2> <p>prabhatdbg21@gmail.com</p>');
    } else if(req.method === 'POST' && pathname === '/users') {
        res.write('Posted for the second time')
        res.end()
    } else {
        res.writeHead(404, {'Content-Type': "text/html"}); 
        res.end('<h2>Page not Found</h2>');
    }
}

server.listen(4100);


/*
Q. create a server and handle query params from the request on following url i.e. `/users?email=nodeserver@gmail.com` from browser

  - parse the  request url using parse method from url module
  - console pathname from parsed url in above step
  - grab url using `req.url`
  - differentiate between `req.url` and `parsedUrl.pathname`
  - grab the email from query params
  - return json response with email from query params
*/
var http = require ('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    var parsedUrl = url.parse(req.url);
    var pathname = parsedUrl.pathname;

    if(req.method === 'GET' && pathname === '/users') {
        res.setHeader('Content-Type', 'application/json');
        res.end(parsedUrl.query);
    } else {
        res.writeHead(404, {'Content-Type': "text/html"}); 
        res.end('<h2>Page not Found</h2>');
    }
}

server.listen(6100);










