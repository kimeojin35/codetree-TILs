const fs = require('fs')
const [a, num] = fs.readFileSync(0).toString().split('\n')
const numArr = num.split(' ').map(Number)
console.log(numArr.map(i => a > i ? 1 : 0).join('\n'))