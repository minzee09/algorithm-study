const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const personLines = input.slice(1, n + 1);

// Please Write your code here.
class People{
    constructor(name, addr, city){
        this.name = name;
        this.addr = addr;
        this.city = city;
    }
}

const people = [];

for(p of personLines){
    const [name, addr, city] = p.split(' ');
    people.push(new People(name, addr, city));
}

const first = {
    name : people[0].name,
    addr : people[0].addr,
    city : people[0].city,
};

for(p of people){
    if(p.name > first.name){
        first.name = p.name;
        first.addr = p.addr;
        first.city = p.city;
    }
}

console.log('name', first.name);
console.log('addr', first.addr);
console.log('city', first.city);



