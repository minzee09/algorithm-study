const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const stairs = input.slice(1).map(Number);

const dp = Array(n).fill(0);

if (n === 1) {
  console.log(stairs[0]);
} else if (n === 2) {
  console.log(stairs[0] + stairs[1]);
} else {
  dp[0] = stairs[0];
  dp[1] = stairs[0] + stairs[1];
  dp[2] = Math.max(stairs[0] + stairs[2], stairs[1] + stairs[2]);

  for (let i = 3; i < n; i++) {
    dp[i] = Math.max(
      dp[i - 2] + stairs[i],
      dp[i - 3] + stairs[i - 1] + stairs[i]
    );
  }

  console.log(dp[n - 1]);
}
