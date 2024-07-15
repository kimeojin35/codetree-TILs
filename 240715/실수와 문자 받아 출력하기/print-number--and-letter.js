const fs = require('fs')
const [c, a, b] = fs.readFileSync(0).toString().split('\n');
console.log(`${c}\n${Number(a).toFixed(2)}\n${Number(b).toFixed(2)}`)