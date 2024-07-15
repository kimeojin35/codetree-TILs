const fs = require('fs')
let [x, y] = fs.readFileSync(0).toString().split(' ').map(Number)
console.log(`${x += 8}\n${y *= 3}\n${x * y}`)