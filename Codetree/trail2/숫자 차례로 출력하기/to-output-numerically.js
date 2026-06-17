const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

// Please Write your code here.
function printAsc(n){
    if(n===0) return;

    printAsc(n-1);
    process.stdout.write(n+' ');
}

function printDesc(n){
    if(n===0) return;

    process.stdout.write(n+' ');
    printDesc(n-1);
}

printAsc(n);
console.log();
printDesc(n);