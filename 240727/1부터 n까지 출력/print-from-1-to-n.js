const fs = require('fs')
const input = Number(fs.readFileSync(0))
let arr = []
for (let i = 1; i <= input; i++) {
    arr.push(i)
}
console.log(arr.join(" "))