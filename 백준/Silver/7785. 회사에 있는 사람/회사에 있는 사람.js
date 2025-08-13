const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().trim().split('\n');

const names = input.slice(1).map(n => n.replace(/\r/g, '').split(' ')); // \r 제거하기 위해 replace
const answer = new Set();

for (n of names) {
    if (n[1] == 'enter') {
        answer.add(n[0]);
    } else if (n[1] == 'leave') {
       answer.delete(n[0]); 
    }
}

console.log([...answer].sort().reverse().join('\n'));