const fs = require('fs')
const [a, b, c] = fs.readFileSync(0).toString().split(' ').map(Number)
console.log(`${a + b + c}\n${Math.floor((a + b + c) / 3)}`)