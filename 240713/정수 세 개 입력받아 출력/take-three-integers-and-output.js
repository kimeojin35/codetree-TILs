const fs = require('fs')
const [arr, c] = fs.readFileSync(0).toString().split("\n")
const [a, b] = arr.split(" ")
console.log(a, b, c)