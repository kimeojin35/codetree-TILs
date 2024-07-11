const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.map((i) => {
    let answer = 0;
    i.split(" ").map((j) => {
        answer += parseInt(j);
    })
    console.log(answer);
})