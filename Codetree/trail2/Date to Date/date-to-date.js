const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);

// Please Write your code here.
const num_of_days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let mon1 = 0;
for(let i = 1; i < m1; i++){
    mon1 += num_of_days[i];
}

let mon2 = 0;
for(let i = 1; i < m2; i++){
    mon2 += num_of_days[i];
}

console.log((mon2+d2)-(mon1+d1)+1)
