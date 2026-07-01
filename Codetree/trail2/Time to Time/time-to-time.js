const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b, c, d] = input[0].split(' ').map(Number);
// Please Write your code here.
// 4시 1분 - 2시 5분
console.log((c*60+d) - (a*60+b))