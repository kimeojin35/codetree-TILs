const fs = require('fs')
const input = Number(fs.readFileSync(0))
let arr = []
for (let i = 1; i <= 5; i++) {
    arr.push(input * i)
}
console.log(arr.join(" "))