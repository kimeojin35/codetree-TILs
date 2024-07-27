const fs = require('fs')
const input = Number(fs.readFileSync(0))
let arr = []
let i = 3;
while (i <= input) {
    arr.push(i)
    i += 3
}

console.log(arr.join(" "))