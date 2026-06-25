const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [s_code, m_point, time] = input[0].split(' ');
// Please Write your code here.

class Mission {
    constructor(s_code, m_point, time) {
        this.s_code = s_code;
        this.m_point = m_point;
        this.time = time;
    }
}

const mission = new Mission(s_code, m_point, time);
console.log('secret code : ' + mission.s_code);
console.log('meeting point : ' + mission.m_point);
console.log('time : '+mission.time);