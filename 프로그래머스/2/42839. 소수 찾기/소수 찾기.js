function solution(numbers) {
    // 1. 문자열을 배열로 분리
    let digits = numbers.split('');
    let uniqueNumbers = new Set();
    
    // 2. 재귀 함수를 이용해 가능한 모든 순열(숫자 조합) 생성
    function generatePermutation(current, remaining) {
        if (current !== "") {
            uniqueNumbers.add(parseInt(current)); // parseInt가 앞의 0을 제거해줌
        }
        for (let i = 0; i < remaining.length; i++) {
            // 남은 숫자 중 하나를 선택해 current에 추가하고, 나머지 배열로 재귀 호출
            generatePermutation(current + remaining[i], remaining.slice(0, i).concat(remaining.slice(i + 1)));
        }
    }
    
    generatePermutation("", digits);
    
    // 3. 소수 판별 함수
    function isPrime(n) {
        if (n < 2) return false; // 0과 1은 소수가 아님
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }
    
    // 4. 고유 숫자들 중 소수 개수를 계산
    let answer = 0;
    uniqueNumbers.forEach(num => {
        if (isPrime(num)) answer++;
    });
    
    return answer;
}
