const fs = require('fs')
const [h, m] = fs.readFileSync(0).toString().split(':').map(Number)
console.log(`${h + 1}:${m}`)