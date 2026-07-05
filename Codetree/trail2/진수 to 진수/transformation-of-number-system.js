const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b] = input[0].split(' ').map(Number);
const n = input[1];
// Please Write your code here.

// A => 2진수
let answer = 0;
n.split('').reverse().forEach((num,i) => {
    answer += num * Math.pow(a,i);
})

// 2진수 => B
let binary = [];
while (true) {
    if (answer < 2) {
        binary.push(answer);
        break;
    }

    binary.push(answer % b);
    answer = parseInt(answer / b);
}
console.log(Number(binary.reverse().join('')))



