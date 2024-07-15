const fs = require('fs')
const n = Number(fs.readFileSync(0))

console.log(n >= 1 ? "High" : (n < 0.5 ? "Low" : "Middle"))