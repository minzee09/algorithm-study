const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().trim().split('\n');

let answer = '';
for(let i = 1; i <= input[0]; i++){
    const repeat = input[i].split(' ')[0];
    let str = input[i].split(' ')[1];
    for (s of str){
        answer += s.repeat(repeat);
    }
    answer += '\n'
}
console.log(answer);