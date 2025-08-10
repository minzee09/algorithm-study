const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().trim().split('\n');

const wordLength = input[0];
const words = input.slice(1);

words.sort((a,b) => {
    if(a.length === b.length) return a.localeCompare(b); // 문자열 정렬은 sort보단 localeCompare 메서드 사용
    return a.length - b.length;
})

const wordsList = new Set(words);

console.log([...wordsList].join('\n'))