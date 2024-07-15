const fs = require('fs')
const n = fs.readFileSync(0).toString().trim()
let answer = 'Failure';
if (n == 'S') answer = 'Superior'
else if (n == 'A') answer = 'Excellent'
else if (n == 'B')answer = 'Good'; 
else if (n == 'C') answer = 'Usually'
else if (n == 'D') answer = 'Effort'
else answer == 'Failure'
console.log(answer)