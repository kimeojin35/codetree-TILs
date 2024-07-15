const fs = require('fs')
const n = Number(fs.readFileSync(0))
let answer;
if (n >= 3 && n <= 5) answer = "Spring"
else if (n >= 6 && n <= 8) answer = 'Summer'
else if (n >= 9 && n <= 11) answer = 'Fall'
else answer = 'Winter'
console.log(answer)