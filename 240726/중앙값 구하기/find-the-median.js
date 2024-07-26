const fs = require('fs')
const numbers = fs.readFileSync(0).toString().split(' ').map(Number)
console.log(numbers.sort((a, b) => {return a - b})[1])