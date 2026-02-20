function solution(ineq, eq, n, m) {
    var answer = 0;
    if(eq === '!'){
        ineq === '<' ? answer = n < m : answer = n > m;
    } else {
        ineq === '<' ? answer = n <= m : answer = n >= m;
    }
    return Number(answer);
}