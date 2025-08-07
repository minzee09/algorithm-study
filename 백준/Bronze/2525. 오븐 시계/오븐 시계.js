const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().trim().split('\n');

let [hour, min] = input[0].split(' ').map(Number);
let time = Number(input[1]);

let totalMin = hour * 60 + min + time;
totalMin %= 24 * 60; // 다음날 넘어갔을 경우 초기화
hour = parseInt(totalMin/60);
min = totalMin%60;

console.log(hour,min);