const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const T = [];
const P = [];

for (let i = 1; i <= N; i++) {
  const [t, p] = input[i].split(" ").map(Number);
  T[i] = t;
  P[i] = p;
}

const dp = Array(N + 2).fill(0); // N+1까지 dp 사용

for (let i = N; i >= 1; i--) {
  const end = i + T[i];
  if (end <= N + 1) {
    dp[i] = Math.max(dp[i + 1], P[i] + dp[end]);
  } else {
    dp[i] = dp[i + 1];
  }
}

console.log(dp[1]);
