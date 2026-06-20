const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

// Please Write your code here.
function max(n,curr){
    if (n === 0) return curr;
    if(curr > arr[n-1]) return max(n-1, curr);
    else return max(n-1, arr[n-1]);
}

console.log(max(n,arr[0]))