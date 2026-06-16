const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.
function isDecimal(num){
  for(let i = 2; i < 9; i++){
    if(num % i === 0 && num !== i) return false;
  }
  return true;
}

let answer = 0;
for(let i = A; i <= B; i++){
  if(isDecimal(i)) answer+=i;
}

console.log(answer);