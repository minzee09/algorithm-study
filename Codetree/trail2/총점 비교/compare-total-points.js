const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const studentData = input.map(line => line.split(' '));

// Please write your code here.
class Student{
    constructor(name, kor, eng, math){
        this.name = name;
        this.kor = kor;
        this.eng = eng;
        this.math = math;
    }
}

function cmp(a,b){
    return (a.kor + a.eng + a.math) - (b.kor + b.eng + b.math);
}

const student = [];
for(let s of studentData){
    const [name, kor, eng, math] = s;

    student.push(new Student(
        name,
        Number(kor),
        Number(eng),
        Number(math)
    ));
}

student.sort(cmp);

student.forEach(n => {
    console.log(n.name, n.kor, n.eng, n.math)
})