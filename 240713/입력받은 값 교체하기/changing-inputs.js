const fs = require('fs')
const [a, b] = fs.readFileSync(0).toString().split(" ")

console.log(Number(b), Number(a))