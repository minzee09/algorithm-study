const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().split(/\r?\n/);

const [N, M] = input[0].split(' ').map(Number);
const square = input
  .slice(1, 1 + N)
  .map(line => line.trim().split(''));

let maxArea = 1;
const maxK = Math.min(N, M);

for (let k = 0; k < maxK; k++) {
  for (let i = 0; i + k < N; i++) {
    for (let j = 0; j + k < M; j++) {
      const v = square[i][j];
      if (
        square[i][j + k] === v &&
        square[i + k][j] === v &&
        square[i + k][j + k] === v
      ) {
        const area = (k + 1) * (k + 1);
        if (area > maxArea) maxArea = area;
      }
    }
  }
}

console.log(maxArea);
