const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, S, M] = input[0].split(' ').map(Number);
const V = input[1].split(' ').map(Number);

const dp = Array.from({ length: N + 1 }, () => Array(M + 1).fill(false));
dp[0][S] = true;

for (let i = 1; i <= N; i++) {
  for (let v = 0; v <= M; v++) {
    if (dp[i - 1][v]) {
      const up = v + V[i - 1];
      const down = v - V[i - 1];
      if (up <= M) dp[i][up] = true;
      if (down >= 0) dp[i][down] = true;
    }
  }
}

let answer = -1;
for (let v = M; v >= 0; v--) {
  if (dp[N][v]) {
    answer = v;
    break;
  }
}

console.log(answer);
