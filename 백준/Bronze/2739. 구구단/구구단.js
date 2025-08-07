const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().trim().split(' ').map(Number)

let answer = '';

for (let i = 1; i <= 9; i++){
    answer += `${input} * ${i} = ${input*i}\n`;
}

console.log(answer);