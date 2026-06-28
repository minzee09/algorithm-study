const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

class Student{
  constructor(name, height, weight){
    this.name = name;
    this.height = height;
    this.weight = weight;
  }
}

const n = Number(input[0]);
const records = [];
for (let i = 1; i <= n; i++) {
  const [name, height, weight] = input[i].split(" ");
  records.push(new Student(name, Number(height), Number(weight)));
}

// Please Write your code here.
function cmp(a,b){
  if(a.height === b.height){
    return b.weight - a.weight;
  }
  return a.height-b.height;
}

records.sort(cmp);
records.forEach(n => console.log(n.name, n.height, n.weight));