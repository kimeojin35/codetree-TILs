const fs = require('fs')
const numbers = fs.readFileSync(0).toString().split(' ').map(Number)
console.log(numbers.sort()[1])