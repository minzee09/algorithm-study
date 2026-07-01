const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [m1, d1, m2, d2] = input[0].split(' ').map(Number);
// Please Write your code here.
const week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', "Sun"];
const days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let mon1=0;
for(let i = 1; i < m1; i++){
    mon1 += days[i];
}

let mon2=0;
for(let i = 1; i < m2; i++){
    mon2 += days[i];
}

const dayResult = (mon2+d2) - (mon1+d1);
let result = Math.abs(dayResult) % 7;
if(dayResult < 0 && result !== 0) console.log(week[7-result]);
else console.log(week[result]);

