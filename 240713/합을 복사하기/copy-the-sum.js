const arr = [1, 2, 3]
let a = arr[0];
let b = arr[1];
let c = arr[2]
a = b = c = arr.reduce((n, i) => n + i)
console.log(a, b, c)