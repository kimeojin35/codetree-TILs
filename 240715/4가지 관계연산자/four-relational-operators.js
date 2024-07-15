const fs = require('fs')
const [a, b] = fs.readFileSync(0).toString().split(' ').map(Number)
const arr = [a >= b, a > b, b >= a, b > a]
console.log(arr.map(i => i ? 1 : 0).join('\n'))