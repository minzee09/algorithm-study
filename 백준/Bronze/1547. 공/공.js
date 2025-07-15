// 컵 3개 순서대로 1번(공 O), 2번, 3번
// 컵 2개를 고르고 서로 위치 바꾸고, 단 공의 위치는 바뀌지 않음
// M <= 50
// X,Y <= 3, X=Y일 수 있음

const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().trim().split('\n');

const M = input[0];
let ball = 1;

for (let i = 1; i <= M; i++) {
    const [x, y] = input[i].split(' ').map(Number);
    if (ball === x) {
        ball = y;
    } else if (ball === y) {
        ball = x;
    }
}
console.log(ball);