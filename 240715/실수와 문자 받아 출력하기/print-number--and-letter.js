const fs = require('fs')
const [c, a, b] = fs.readFileSync(0).toString().split('\n');
console.log(`${c}\n${a.toFixed(2)}\n${b.toFixed(2)}`)