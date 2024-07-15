const fs = require('fs')
const input = fs.readFileSync(0).toString().split(' ').map(Number)
console.log(Math.min.apply(null, input))