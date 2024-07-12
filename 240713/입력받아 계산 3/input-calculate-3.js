const fs = require('fs')
const [line1, line2] = fs.readFileSync(0).toString().split("\n").map(Number)
console.log(line1 * line2)