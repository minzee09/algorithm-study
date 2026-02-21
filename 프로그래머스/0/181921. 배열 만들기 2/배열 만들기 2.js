// BFS
function solution(l, r) {
    const result = [];
    const queue = [5];

    while (queue.length) {
        const num = queue.shift();

        if (num > r) continue;

        if (num >= l) result.push(num);

        queue.push(num * 10);     // 뒤에 0 붙이기
        queue.push(num * 10 + 5); // 뒤에 5 붙이기
    }

    return result.length ? result.sort((a,b)=>a-b) : [-1];
}