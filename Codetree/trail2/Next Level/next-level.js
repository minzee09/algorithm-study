const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [user_id, levelStr] = input[0].split(' ');
const level = parseInt(levelStr);

// Please Write your code here.
class UserInfo{
    constructor(user = 'codetree', lv = 10) {
        this.user = user;
        this.lv = lv;
    }
}

const user1 = new UserInfo();
const user2 = new UserInfo(user_id, level);

console.log('user', user1.user, 'lv', user1.lv);
console.log('user', user2.user, 'lv', user2.lv);