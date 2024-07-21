const fs = require('fs')
const input = fs.readFileSync(0).split(" ").map(Number)
console.log(Math.max.apply(null, input))