function solution(numbers) {
    const nums = numbers.split('');
    const visited = Array(nums.length).fill(false);
    const set = new Set();
    
    function dfs(current) {
        if (current.length > 0) {
            set.add(Number(current));
        }
        for (let i = 0; i < nums.length; i++){
            if(!visited[i]) {
                visited[i] = true;
                dfs(current + nums[i]);
                visited[i] = false;
            }
        }
    }
    
    dfs('');
let answer = 0;

set.forEach((num) => {
    if (num < 2) return;

    let isPrime = true;

    for (let j = 2; j <= Math.sqrt(num); j++) {
        if (num % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) answer++;
});
    return answer;
}