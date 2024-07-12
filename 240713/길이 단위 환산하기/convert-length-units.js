const fs = require('fs')
const ft = Number(fs.readFileSync(0))
console.log((ft * 30.48).toFixed(1))