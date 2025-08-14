let input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().trim()

let answer = 0;

while (input >= 0) {
    if (Number(input) % 5 === 0) {
        answer += input/5;
        console.log(answer);
        process.exit(0); // 종료
    }
    input -= 3 // 3kg 설탕 봉지 하나 사용
    answer ++;
}

console.log(-1);