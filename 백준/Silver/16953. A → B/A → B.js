const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().trim().split(' ').map(Number);

let [A,B]= input;
let count = 1; // 연산 횟수, A 자체도 포함
let current = B;

while (current > A) {
    if (current % 2 === 0) {
        current /= 2;
    } else if (current % 10 === 1) {
        current = Math.floor(current / 10);
    } else {
        count = -1; // 불가능
        break;
    }
    count++;
}

if (current !== A) count = -1;
console.log(count);

// 양수만 다룬다면 parseInt 써도 됨. (주로 문자열 처리에 쓰이기 때문)
// Math.floor는 숫자 계산용으로 더 명확함 그래서 음수가 섞일 수 있는 상황이면 이걸 사용하는게 좋음