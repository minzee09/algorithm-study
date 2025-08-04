const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().trim().split(' ').map(Number);

const sortedNum = input.sort((a,b) => a - b);
let answer = "";
for(let i = 0; i < sortedNum.length; i++) {
    answer += sortedNum[i] + ' ';
}

console.log(answer);

// 그냥 sort()하면 문자열 기준으로 정렬이 되기 때문에 숫자가 2자리 이상되면 제대로 오름차순으로 정렬이 안됨. 따라서 a - b를 리턴해줘야함