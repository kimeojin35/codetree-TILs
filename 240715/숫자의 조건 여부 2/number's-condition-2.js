const fs = require('fs')
const a = Number(fs.readFileSync(0))
let answer = '';
if (a == 5) answer = 'A'
if (a % 2 == 0) answer = 'B'
console.log(answer)