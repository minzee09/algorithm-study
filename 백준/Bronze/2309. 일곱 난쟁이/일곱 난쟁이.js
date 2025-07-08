const input = require('fs').readFileSync(process.platform === "linux"?"/dev/stdin":"./input.txt").toString().trim().split('\n').map(Number);

const totalSum = input.reduce((sum, height) => sum + height, 0);

let result = [];
outer:
for (let i = 0; i < 9; i++) {
  for (let j = i + 1; j < 9; j++) {
    if (totalSum - input[i] - input[j] === 100) {
      result = input.filter((_, idx) => idx !== i && idx !== j);
      break outer;
    }
  }
}

result.sort((a, b) => a - b);
console.log(result.join('\n'));