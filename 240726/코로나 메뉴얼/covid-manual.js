const fs = require('fs')
const input = fs.readFileSync(0).toString().split("\n")
let count = 0;
input.map((i, j) => {
    let [bool, temp] = i.split(" ")
    if (bool == "Y" && Number(temp) >= 37) {
        count++;
    }
})
if (count >= 2) {
    console.log('E')
} else {
    console.log('N')
}