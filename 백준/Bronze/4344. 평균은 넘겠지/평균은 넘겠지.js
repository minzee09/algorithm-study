const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().trim().split('\n');

let answer = '';
for(let i = 1; i <= input[0]; i++){
    const testCase = input[i].split(" ").slice(1).map(Number);
    let avg = testCase.reduce((a,b) => a+b) / testCase.length;
    let count = 0;
    for (let j = 0; j < testCase.length; j++){
        if(testCase[j] > avg) count++;
    }
    answer += (count / testCase.length * 100).toFixed(3) + '%\n';
}
console.log(answer)