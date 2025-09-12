const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt").toString().trim().split("\n").map(Number);

const N = input[0];
const arr = input.slice(1);

arr.sort((a, b) => a - b);

let dissatisfaction = 0;
for (let i = 0; i < N; i++) {
  dissatisfaction += Math.abs(arr[i] - (i + 1));
}

console.log(dissatisfaction.toString());
