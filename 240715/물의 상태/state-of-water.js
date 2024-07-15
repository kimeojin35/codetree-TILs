const fs = require('fs')
const n = Number(fs.readFileSync(0))
coonsole.log(n < 0 ? "ice" : (n >= 100 ? "vapor" : "water"))