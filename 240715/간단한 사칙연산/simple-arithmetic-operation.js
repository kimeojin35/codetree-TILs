const fs = require('fs')
const [a, b] = fs.readFileSync(0).toString().split(' ').map(Number)
console.log(`${a + b}\n${a - b}\n${(a / b).toFixed(0)}\n${a % b}`)