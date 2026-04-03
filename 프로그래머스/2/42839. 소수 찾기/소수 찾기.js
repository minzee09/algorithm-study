function solution(numbers) {
    const nums = numbers.split('');
    const visited = Array(nums.length).fill(false);
    const set = new Set();

    // 소수 판별 함수
    function isPrime(n) {
        if (n < 2) return false; // 0과 1은 소수가 아닌 예외니까 제외
        for (let i = 2; i <= Math.sqrt(n); i++) { // 약수 짝에서 작은 수 이미 판별했으니까 루트 n까지만 검사
            if (n % i === 0) return false;
        }
        return true;
    }

    // 순열 생성
    function dfs(current) {
        if (current.length > 0) {
            set.add(Number(current));
        }

        for (let i = 0; i < nums.length; i++) {
            if (!visited[i]) { // visited가 false면
                visited[i] = true;
                dfs(current + nums[i]);
                visited[i] = false;
            }
        }
    }

    dfs('');

    let count = 0;
    set.forEach(num => {
        if (isPrime(num)) count++;
    });

    return count;
}