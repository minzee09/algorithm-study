const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [u_code, l_color, time] = input[0].split(' ');
// Please write your code here.

class Disarm{
    constructor(u_code, l_color, time){
        this.u_code = u_code;
        this.l_color = l_color;
        this.time = time;
    }
}

const disarm = new Disarm(u_code, l_color, time);

console.log('code : '+disarm.u_code);
console.log('color : '+disarm.l_color);
console.log('second : '+disarm.time);