const fs = require('fs')
const [h, w] = fs.readFileSync(0).toString().split(' ').map(Number)
const b = (10000*w)/(h*h)
console.log(`${Math.floor(b)}\n${b >= 25 ? "Obesity" : ""}`)