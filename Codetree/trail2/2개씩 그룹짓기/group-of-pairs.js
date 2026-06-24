const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const nums = input[1].trim().split(' ').map(Number);

// Please Write your code here.

//가장 작은 수 + 가장 큰 수
nums.sort((a, b) => a - b);

let answer = 0;

for (let i = 0; i < n; i++) {
    const sum = nums[i] + nums[2 * n - 1 - i];
    answer = Math.max(answer, sum);
}

console.log(answer);