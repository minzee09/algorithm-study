const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [prod2_id, code2] = input[0].split(' ');
// Please Write your code here.

class Info{
    constructor(prod_id='codetree', code=50){
        this.prod_id = prod_id;
        this.code = code;
    }
}

const info1 = new Info();
const info2 = new Info(prod2_id, code2);

console.log('product', info1.code, 'is', info1.prod_id);
console.log('product', info2.code, 'is', info2.prod_id);