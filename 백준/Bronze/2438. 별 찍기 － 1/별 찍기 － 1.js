const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().trim().split(' ').map(Number)

let answer = '';

for (let i = 1; i <= input; i++){
   for (let j = 1; j <= i; j++){
    answer += '*';
   }
   answer += '\n';
}

console.log(answer);