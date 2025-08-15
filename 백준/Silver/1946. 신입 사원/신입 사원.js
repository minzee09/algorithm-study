const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().trim().split('\n');

let line = 1;

for (let t = 0; t < Number(input[0]); t++) { // 테스트 케이스 별로
    n = Number(input[line]);
    let arr = [];
    for (let i = line + 1; i <= line + n; i++) {
        let data = input[i].split(' ').map(Number);
        arr.push(data);
    }
    arr.sort((a,b) => a[0]-b[0]);
    let count = 0;
    let minValue = 100001;
    for (let [x, y] of arr) {
        if (y < minValue) {
            minValue = y;
            count ++;
        }
    }
    console.log(count);
    line += n+1;
}