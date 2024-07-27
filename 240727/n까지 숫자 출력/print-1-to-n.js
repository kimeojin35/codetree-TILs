const fs = require('fs')
let input = Number(fs.readFileSync(0))
let i = 1;
let arr = []
while (input >= i) {
    arr.push(i)
    i++
}
console.log(arr.join(" "))