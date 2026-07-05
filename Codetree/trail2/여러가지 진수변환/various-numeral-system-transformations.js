const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [n, b] = input[0].split(' ');

// Please Write your code here.
let binary = [];
while (true) {
    if (n < 2) {
        binary.push(n);
        break;
    }

    binary.push(n % b);
    n = parseInt(n / b);
}

console.log(Number(binary.reverse().join('')));