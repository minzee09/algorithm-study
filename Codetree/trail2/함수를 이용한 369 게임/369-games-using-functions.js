const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.
function contains369(n) {
  const str = String(n);

  for (const ch of str) {
    if (ch === '3' || ch === '6' || ch === '9') {
      return true;
    }
  }

  return false;
}

function isTargetNumber(n) {
  return contains369(n) || n % 3 === 0;
}

let count = 0;

for (let i = A; i <= B; i++) {
  if (isTargetNumber(i)) {
    count++;
  }
}

console.log(count);