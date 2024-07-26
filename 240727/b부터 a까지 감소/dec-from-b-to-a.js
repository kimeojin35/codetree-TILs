const fs = require('fs')
const [a, b] = fs.readFileSync(0).toString().split(" ").map(Number)
let arr = []
for (let i = b; i >= a; i--) {
    arr.push(i)
}
console.log(arr.join(" "))