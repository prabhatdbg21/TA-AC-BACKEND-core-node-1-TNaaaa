console.log('Welcome to Nodejs');

var os = require('os');

// number of cpu's
var cpus = os.cpus.length;
console.log(cpus);

// free memory
var freeM = os.freemem();
console.log(freeM);

// uptime 
var uptime = os.uptime();
console.log(uptime);

// version
var version = os.version();
console.log(version);

/*
var fs = require('fs');
fs.readFile()
*/

var buff1 = Buffer.alloc(12)
buff1.toString()

// blocking code
console.log('first');

console.time('task1');
for (let i = 0; i < 1000000; i++) {
    // do the work
};
console.timeEnd('task1');

console.log('last');

// non-blocking code
console.log('first');

setTimeout( () => {
    console.log('second')
}, 1000);

console.log('last');

// http protocol
var url = require("url");
const parsedUrl = url.parse(
  "https://airindia.com/fares/calculate?from=delhi&to=detroit",
  true
);
console.log(parsedUrl.query);
console.log(parsedUrl.protocol);
console.log(parsedUrl.pathname);

console.log(parsedUrl.host, parsedUrl.protocol);