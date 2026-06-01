const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let n = Number(input[0]);
let m = Number(input[1]);
// Please Write your code here.

function gcd(num1, num2){
    let temp = 1;
    for(let i = temp; i <= num1; i++){
        if(num1 % i === 0 && num2 % i === 0) temp = i;
    }
    return temp;
}

let result = 0;

if(n > m) result = gcd(m, n);
else result = gcd(n,m);

console.log(result);