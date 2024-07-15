const fs = require('fs')
const [a, b] = fs.readFileSync(0).toString().split('\n')
const [mathA, englishA] = a.split(' ').map(Number)
const [mathB, englishB] = b.split(' ').map(Number)
let answer;
if (mathA > mathB) answer = 'A'
else if (mathB > mathA) answer = 'B'
else {
    if (englishA > englishB) answer = 'A'
    else answer = 'B'
}
console.log(answer)