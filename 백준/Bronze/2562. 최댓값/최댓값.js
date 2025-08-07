const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().trim().split('\n');

const nums = input.map(Number);
const max = Math.max(...nums)
let count = 0;
for (num of nums){
    count++;
    if(max == num) break;
}
console.log(max + '\n' + count)