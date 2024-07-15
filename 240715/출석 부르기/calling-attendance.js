const fs = require('fs')
const n = Number(fs.readFileSync(0))
let answer;
switch(n) {
    case 1: answer = "John"; break;
    case 2: answer = "Tom"; break;
    case 3: answer = "Paul"; break;
}

console.log(answer)