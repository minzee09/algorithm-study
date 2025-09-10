const input = require("fs").readFileSync(process.platform === 'linux' ? "/dev/stdin" : 'input.txt').toString().trim().split("\n");

const doc = input[0] ?? '';
const word = input[1] ?? '';

let count = 0;
let pos = 0;

if (word.length > 0) {
  while (true) {
    const idx = doc.indexOf(word, pos);
    if (idx === -1) break;
    count++;
    pos = idx + word.length; // 겹치지 않게 단어 길이만큼
  }
}

console.log(count);
