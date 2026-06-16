const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n1, n2] = input[0].split(" ").map(Number);
const a = input[1].split(" ").map(Number);
const b = input[2].split(" ").map(Number);

function isSubsequence(a, b) {
    for (let i = 0; i <= n1 - n2; i++) {
        let isSame = true;
        for (let j = 0; j < n2; j++) {
            if (a[i + j] !== b[j]) {
                isSame = false;
                break;
            }
        }
        if (isSame) {
            return "Yes";
        }
    }

    return "No";
}

console.log(isSubsequence(a, b));