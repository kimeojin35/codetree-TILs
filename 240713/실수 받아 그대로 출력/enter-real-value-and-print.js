const fs = require('fs')
const n = Number(fs.readFileSync(0))

console.log(n.toFixed(2))