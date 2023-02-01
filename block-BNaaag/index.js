var {readFile, readFileSync} = require('fs')

// async code
readFile('./content.md', 'utf8', (err, file) => {
  console.log(err, file)
})

// sync code
let result = readFileSync('./content.md', 'utf8');
console.log(result)


var buff1 = Buffer.alloc(10)
console.log(buff1)


buff1.write('Welcome to Buffer')
console.log(buff1)