const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
     const swapCase = (str) => {
        return str
            .split("")
            .map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join("");
    };

    // 변환 결과 출력
    console.log(swapCase(str));
});