const fs = require('fs')
const a = fs.readFileSync(0)
console.log(a == 1 ? "t" : "f")