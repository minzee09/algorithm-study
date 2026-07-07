const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
  segments.push(input[i].split(' ').map(Number));
}

// Please Write your code here.
const maxNum = Math.max(...segments.flat());
const checked = Array(maxNum + 1).fill(0);

segments.forEach(x =>{
    for(let i = x[0]; i <= x[1]; i++){
        checked[i] += 1;
    }
})

console.log(Math.max(...checked))