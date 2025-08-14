const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().trim().split(' ').map(Number);

let sum = 0;
let current = 0;

while(sum <= input) {
    current ++;
    sum += current;
}

console.log(current - 1);