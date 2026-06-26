const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rawStudentData = input.slice(1, n + 1);

// Please Write your code here.
class TestScore{
    constructor(name, kor, eng, math){
        this.name = name;
        this.kor = kor;
        this.eng = eng;
        this.math = math;
    }
}

function cmp(a,b) {
    if(a.kor === b.kor){
        if(a.eng === b.eng){
            return b.math - a.math
        }
        return b.eng - a.eng;
    }
    return b.kor - a.kor;
}

const test = [];

for(let t of rawStudentData){
    const [name, kor, eng, math] = t.split(' ');
    test.push(new TestScore(name,kor,eng,math));
}

test.sort(cmp);

test.forEach(n => console.log(n.name, n.kor, n.eng, n.math))