const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().trim().split('\n');

function check(data){
    let setData = new Set(data[0]);
    for(let i = 0; i < data.length - 1; i++){
        if(data[i] != data[i + 1]) {
            if (setData.has(data[i+1])){
                return false;
            } else {
                setData.add(data[i+1])
            }
        }
    }
    return true;
}

let answer = 0;

for (let i = 1; i <= input[0]; i++){
    let data = input[i];
    if (check(data)) answer++;
}
console.log(answer);
