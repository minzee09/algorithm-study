const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [year, month, day] = input[0].split(" ").map(Number);
// Please Write your code here.

function isLeapYear(year){
    let answer = false;
    if(year % 4 === 0){
        answer = true;
        if(year % 100 === 0){
            answer = false;
            if(year % 400 === 0) answer = true;
        }
    }
    return answer;
}

function dateValidation(year, month, day){
    let feburary_date = 28;
    if(isLeapYear(year)) feburary_date = 29;

    const date30 = [4,6,9,11];
    const date31 = [1,3,5,7,8,10,12];

    if(month === 2 && day <= feburary_date) return true;
    else if((date30.includes(month) && day <= 30) || (date31.includes(month) && day <= 31)) return true;
    else return false;
}

function getSeason(month){
    let season = '';
    if(month >= 3 && month <= 5) season = 'Spring';
    else if(month >= 6 && month <= 8) season = 'Summer';
    else if(month >= 9 && month <= 11) season = 'Fall';
    else season = 'Winter'

    return season;
}

if(!dateValidation(year,month,day)) console.log(-1);
else console.log(getSeason(month));