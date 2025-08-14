const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().trim().split('-')

let answer = 0;
for (let i = 0; i < input.length; i++) {
    let current = input[i].split('+').map(Number).reduce((a,b)=> a+b);
    if(i == 0) answer += current;
    else answer -= current;
}

console.log(answer)