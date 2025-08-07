const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().trim().split(' ').map(n => Number(n));

let hour = input[0];
let min = input[1];

if (min - 45 < 0) {
    if(hour == 0) {
        hour = 23;
    } else {
        hour--;
    }
    min = 60-(45-min);
} else {
    min = min - 45;
}

console.log(hour,min)