const fs = require('fs')
const input = fs.readFileSync(0).toString().split(' ').map(Number)
console.log(input[0] == Math.min.apply(null, input) ? 1 : 0, input[0] == input[1] && input[1] == input[2] ? 1 : 0)