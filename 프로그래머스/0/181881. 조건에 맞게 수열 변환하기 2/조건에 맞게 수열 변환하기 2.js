function solution(arr) {
    // 메모이제이션을 위한 Map
    const memo = new Map();

    // 주어진 조건에 따른 변환 함수
    function transform(n) {
        if (n >= 50 && n % 2 === 0) return n / 2;
        if (n < 50 && n % 2 === 1) return n * 2 + 1;
        return n;
    }
    
    // n이 안정 상태가 될 때까지 필요한 변환 횟수를 재귀적으로 계산
    function iterCount(n) {
        if (memo.has(n)) return memo.get(n);
        const nxt = transform(n);
        if (n === nxt) {  // 안정 상태
            memo.set(n, 0);
            return 0;
        }
        const count = 1 + iterCount(nxt);
        memo.set(n, count);
        return count;
    }
    
    // 배열의 각 원소마다 필요한 변환 횟수의 최댓값을 구함
    let answer = 0;
    for (let num of arr) {
        answer = Math.max(answer, iterCount(num));
    }
    return answer;
}
