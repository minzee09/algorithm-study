const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().trim().split('\n')

let [coinNum, sum] = input[0].split(' ').map(Number);
const coins = [...new Set(input.slice(1).map(Number))].sort((a,b) => b - a);

let answer = 0;
for (let i = 0; i < coinNum; i++) {
    while (sum >= coins[i]) {
        sum -= coins[i];
        answer ++;
    }
}

console.log(answer)