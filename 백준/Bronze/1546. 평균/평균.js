const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().trim().split('\n');

const score = input[1].split(' ').map(Number);
const max = Math.max(...score);

let total = 0;
for(let i = 0; i < input[0]; i++){
    total += score[i]/max*100;
}

const result = total/input[0];
console.log(Number.isInteger(result) ? result.toFixed(1) : result);