const fs = require('fs')
const [a, b] = fs.readFileSync(0).toString().split('\n').map(Number)
console.log(a >= 1 && b >= 1 ? "High" : (a >= 0.5 && b >= 0.5 ? "Middle" : "Low"))