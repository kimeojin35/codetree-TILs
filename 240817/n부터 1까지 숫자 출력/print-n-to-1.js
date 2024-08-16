const fs = require('fs')
let n = Number(fs.readFileSync(0))
let answer = []
while(n >= 1) {
    answer.push(n)
    n--;
}
console.log(answer.join(' '))