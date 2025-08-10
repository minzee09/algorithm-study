const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().trim().split('\n');

const arrLength = input[0];
const arr = input.slice(1).map(n => n.split(' '));

arr.sort((a,b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
})
console.log(arr.map(n => n.join(' ')).join('\n'))

