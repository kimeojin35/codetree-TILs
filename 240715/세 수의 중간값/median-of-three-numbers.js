const fs = require('fs')
const [a, b, c] = fs.readFileSync(0).toString().split(' ').map(Number)
console.log(b > a && c > b ? 1 : 0)