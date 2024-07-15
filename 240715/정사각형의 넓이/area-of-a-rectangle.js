const fs = require('fs')
const n = Number(fs.readFileSync(0))
console.log(`${n*n}\n${n < 5 ? "tiny" : ""}`)