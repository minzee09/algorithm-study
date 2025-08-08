const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().trim();

console.log(input === '' ? 0 : input.split(' ').length); // 빈문자열이 입력인 경우도 고려