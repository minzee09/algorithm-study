function solution(myString) {
    var answer = '';
    for (let str of myString) {
        if ('l' > str) answer += 'l'
        else answer += str;
    }
    return answer;
}