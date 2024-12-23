function solution(number, n, m) {
    var answer = number % m == 0 && number % n == 0 ? 1 : 0;
    return answer;
}