const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);
// Please write your code here.

function swap(a,b){
    let [c,d] = [b,a];
    return [c, d];
}

const [n1,n2] = swap(n,m);

console.log(n1,n2);