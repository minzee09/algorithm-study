const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
const A = input[1];

// Please Write your code here.
const week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', "Sun"];
const days = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let mon1=0;
for(let i = 1; i < m1; i++){
    mon1 += days[i];
}

let mon2=0;
for(let i = 1; i < m2; i++){
    mon2 += days[i];
}

let dayResult = (mon2+d2) - (mon1+d1);

while(dayResult < 0){
    dayResult += 7;
}

let result = parseInt(dayResult / 7);

if(dayResult % 7 >= week.indexOf(A)) console.log(result + 1);
else console.log(result);

