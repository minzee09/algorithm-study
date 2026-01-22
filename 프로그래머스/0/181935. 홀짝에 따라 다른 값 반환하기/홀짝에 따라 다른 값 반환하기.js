function solution(n) {
    let isEven = (n%2 === 0) ? true : false;
    var answer = 0;
    for(let i = 1; i <= n; i+=2) {
        if (n % 2 === 0) answer += (i+1) ** 2;
        else answer += i;
    }
    return answer;
}