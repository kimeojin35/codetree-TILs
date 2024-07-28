const fs = require('fs')
let [a, b] = fs.readFileSync(0).toString().split(" ").map(Number)
let arr = []
while (a <= b) {
    if (a % 2 == 0) arr.push(a)
    a++;
}
console.log(arr.join(' '))