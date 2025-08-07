const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().trim().split(' ').map(Number)

let answer = 0;
for (let i = 1; i <= input; i++){
    answer += i;
}

console.log(answer);