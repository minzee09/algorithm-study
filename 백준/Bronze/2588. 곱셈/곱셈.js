const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().trim().split('\n').map(Number);

const n2 = input[1].toString().split("").map(Number);

for(let i = n2.length; i > 0; i--) {
    console.log(input[0] * n2[i-1]);
}
console.log(input[0]*input[1]);
