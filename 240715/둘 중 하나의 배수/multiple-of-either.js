const fs = require('fs')
const [a, b] = fs.readFileSync(0).toString().split(' ').map(Number)
console.log(a % 3 == 0 || a % 5 == 0 ? 1 : 0)