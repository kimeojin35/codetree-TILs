const fs = require('fs')
const input = Number(fs.readFileSync(0))
console.log(`${input}\n${input < 0 ? "minus" : ""}`)