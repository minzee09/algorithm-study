const input = require("fs").readFileSync(process.platform === 'linux' ? "/dev/stdin" : 'input.txt').toString().trim().split("\n");

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(input[i].split(' ').map(Number));
}

arr.sort((a,b) => {
    if (a[1] != b[1]) return a[1]-b[1];
    else return a[0]-b[0];
})

let count = 1;
let current = 0;
for (let i = 1; i < n; i++) {
    if(arr[current][1] <= arr[i][0]) {
        current = i;
        count += 1;
    }
}
console.log(count);
