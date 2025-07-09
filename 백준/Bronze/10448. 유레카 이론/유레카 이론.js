const input = require('fs').readFileSync(process.platform === 'linux' ? "/dev/stdin" : "input.txt").toString().trim().split("\n").map(Number);

let input_count = input[0]; // 입력 값 개수
let input_nums = input.slice(1);

// 삼각수 구하기
let triNum = [];
for (let i = 1; i <=45; i++){
  triNum.push((i*(i+1))/2)
}

let result = 0;

for (let i = 0; i < input_count; i++) {
  for (let num1 = 0; num1 < triNum.length; num1++) {
    for (let num2 = num1; num2 < triNum.length; num2++){
      for (let num3 = num2; num3 < triNum.length; num3++){
        if(parseInt(triNum[num1] + triNum[num2] + triNum[num3]) === parseInt(input_nums[i])) {
          result = 1;
        }
      }
    }
  }
  console.log(result);
  result = 0;
}