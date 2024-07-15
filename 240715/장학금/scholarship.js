const fs = require('fs')
const [a, b] = fs.readFileSync(0).toString().split(' ').map(Number)
let answer
if (a >= 90 && b >= 95) answer = 100000
else if (a >= 90 && b >= 90) answer = 50000
else answer = 0
console.log(answer)