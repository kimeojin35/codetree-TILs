const fs = require('fs')
const [y, m, d] = fs.readFileSync(0).toString().split('.')
console.log(`${m}-${d}-${y}`)