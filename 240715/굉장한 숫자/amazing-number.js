const fs = require('fs')
const n = Number(fs.readFileSync(0))
console.log((n % 2 == 1 && n % 3 == 0) || (n % 2 == 0 && n % 5 == 0))