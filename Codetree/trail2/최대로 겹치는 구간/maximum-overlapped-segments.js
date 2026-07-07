const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
    segments.push(input[i].split(' ').map(Number));
}

// Please write your code here.
const minNum = Math.min(...segments.flat());

if (minNum < 0) {
    segments.forEach(n => {
        n[0] += -minNum;
        n[1] += Math.abs(minNum);
    })
}

const maxNum = Math.max(...segments.flat());
const answer = Array(maxNum + 1).fill(0);

for (let i = 0; i < segments.length; i++) {
    const [sta, fin] = segments[i];

    for (let j = sta; j < fin; j++) {
        answer[j] += 1;
    }
}

console.log(Math.max(...answer))