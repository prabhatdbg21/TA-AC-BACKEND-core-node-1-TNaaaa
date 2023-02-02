var os = require('os');

console.log('Welcome to Nodejs');

// number of cpu's
var cpus = os.cpus().length;
console.log(cpus);

// free memory
var freeM = os.freemem();
console.log(freeM);

// uptime 
var uptime = os.uptime(); // duration for which cpu is running without shut down
console.log(uptime);

// version
var version = os.version();
console.log(version);




var buff1 = Buffer.alloc(12);
var buff2 = Buffer.allocUnsafe(12);
buff1.write('hello world')
console.log(buff1.toString())

// blocking code non-blocking code
var {readFile, readFileSync, unlink} = require('fs');
var sync = readFileSync('./app.js')
console.log(sync.toString)
readFile('./app.js', (err, content) => {
    console.log(err, content.toString);
})



/*
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
*/