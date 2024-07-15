const fs = require('fs')
const [first, x, y] = fs.readFileSync(0).toString().split('-')
console.log(`${first}-${y}-${x}`)