function solution(numbers, n) {
    var answer = 0;
    for(num of numbers) {
        if (answer > n) return answer;
        answer += num;
    }
    return answer;
}