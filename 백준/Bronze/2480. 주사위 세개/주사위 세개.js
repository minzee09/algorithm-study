const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().trim().split(' ').map(Number)

let [first, second, third] = input;
let answer = "";

if (first == second && second == third) {
    answer = 10000 + first * 1000;
} else if (first == second || second == third || third == first) {
    if ( first == second) answer = first;
    else answer = third;
    answer = 1000 + answer * 100;
} else {
    answer = input.sort()[2] * 100;
} 

console.log(answer);