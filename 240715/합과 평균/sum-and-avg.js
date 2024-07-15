const fs = require('fs')
let [a, b] = fs.readFileSync(0).toString().split(' ').map(Number)
console.log(a += b, (a / 2).toFixed(1))