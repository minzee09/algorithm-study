const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().trim().split('\n')

const people = input[1].split(' ').map(Number).sort((a,b) => a-b);
function totalTime(t) {
    if(t == 0) return people[0];
    people[t] += totalTime(t-1);
    return people[t];
}
totalTime(Number(input[0])-1)
let answer = people.reduce((a,b) => a+b)
console.log(answer)