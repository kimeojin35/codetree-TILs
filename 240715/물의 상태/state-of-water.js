const fs = require('fs')
const n = Number(fs.readFileSync(0))
let answer = "water"
if (n < 0) answer = "ice"
else if (n >= 100) answer = "vapor"
else answer = "water"
coonsole.log(answer)