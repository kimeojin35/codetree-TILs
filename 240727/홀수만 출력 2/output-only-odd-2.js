const fs = require('fs')
const [a, b] = fs.readFileSync(0).toString().split(" ").map(Number)
let arr = []
for (let i = a; i >= b; i--) {
    if (i % 2 == 1) {
        arr.push(i)
    }
}
console.log(arr.join(" "))