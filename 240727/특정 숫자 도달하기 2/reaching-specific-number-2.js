const fs = require('fs')
const input = Number(fs.readFileSync(0))
let arr = []
for (let i = input; i >= 1; i--) {
    arr.push(i)
}
console.log(arr.join(" "))