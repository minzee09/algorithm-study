const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
// Please Write your code here.

const answer = [];
while (true) {
    if (n < 2) {
        answer.push(n);
        break;
    }

    answer.push(n % 2);
    n = parseInt(n / 2);
}

console.log(answer.reverse().join(''))