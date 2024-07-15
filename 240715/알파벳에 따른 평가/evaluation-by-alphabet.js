const fs = require('fs')
const n = fs.readFileSync(0).toString()
let answer;
switch(n) {
    case 'S': answer = 'Superior'; break;
    case 'A': answer = 'Excellent'; break;
    case 'B': answer = 'Good'; break;
    case 'C': answer = 'Usually'; break;
    case 'D': answer = 'Effort'; break;
    default: answer = 'Failure'
}
console.log(answer)