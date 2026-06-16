const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.
function isDecimal(num){
    for(let i = 2; i < num; i++){
        if(num % i === 0) return false;
    }
    return true;
}

function addSum(num){
    return parseInt(num / 10) + num % 10;
}

let answer = 0;
for(let i = A; i <= B; i++){
    if(isDecimal(i) && addSum(i) % 2 === 0) answer++;
}

console.log(answer);
