const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const segments = input.slice(1, k + 1).map(line => line.split(' ').map(Number));

// Please write your code here.
const answer = Array(n + 1).fill(0);

for (let i = 0; i < segments.length; i++) {
    const [start, finish] = segments[i];
    for (let j = start; j <= finish; j++) {
        answer[j] += 1;
    }
}

console.log(Math.max(...answer))