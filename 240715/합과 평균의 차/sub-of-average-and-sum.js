const fs = require('fs')
const [a, b, c] = fs.readFileSync(0).toString().split(' ').map(Number)
console.log(`${a + b + c}\n${((a + b + c) / 3).toFixed(0)}\n${(a + b + c) - ((a + b + c) / 3).toFixed(0)}`)