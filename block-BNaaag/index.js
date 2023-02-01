//1
var fs = require('fs')

fs.readFile('./content.md', (err, file) => {
  console.log(err, file.toString())
})

//2
console.log('first')

console.time('task1')
for (let i = 0; i < 100000; i++) {
    // work to do 
}
console.timeEnd('task1')

console.log('last')

//3
console.log('first')

setTimeout( () => {
    console.log('second');
}, 1000)

console.log('last')

//4
var buff1 = Buffer.alloc(10)
console.log(buff1)

//5
buff1.write('Welcome to Buffer')
console.log(buff1)