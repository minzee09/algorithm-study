function solution(operations) {
    let queue = [];

    for (let op of operations) {
        let [cmd, num] = op.split(" ");
        num = Number(num);

        if (cmd === "I") {
            queue.push(num);
            queue.sort((a, b) => a - b); // 정렬을 유지
        } else if (cmd === "D" && queue.length > 0) {
            if (num === 1) queue.pop(); // 최댓값 삭제
            else queue.shift(); // 최솟값 삭제
        }
    }

    return queue.length ? [queue[queue.length - 1], queue[0]] : [0, 0];
}
