const fs = require('fs')
const input = Number(fs.readFileSync(0))
const arr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
console.log(arr[input - 1])