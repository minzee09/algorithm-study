const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

function checkNumber(n) {
  const ten = Math.floor(n / 10);
  const one = n % 10;

  const isEven = n % 2 === 0;
  const isSumMultipleOfFive = (ten + one) % 5 === 0;

  return isEven && isSumMultipleOfFive;
}

console.log(checkNumber(n) ? "Yes" : "No");