const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const binaryInput = input[0];

// Please Write your code here.
let num = 0;
binaryInput.split('').reverse().forEach((n,i) => {
    num += n * Math.pow(2,i);
})

num *= 17;
const answer = []

while (true) {
    if (num < 2) {
        answer.push(num);
        break;
    }

    answer.push(num % 2);
    num = parseInt(num / 2);
}

console.log(answer.reverse().join(''));
