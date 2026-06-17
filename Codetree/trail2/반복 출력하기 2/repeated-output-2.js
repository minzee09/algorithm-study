const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please Write your code here.
function print(n){
    if(n===0) return;
    print(n-1);
    console.log('HelloWorld');
}

print(n);