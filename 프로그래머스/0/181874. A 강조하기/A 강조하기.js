function solution(myString) {
    var answer = myString.toLowerCase().split('').map(char => char === 'a' ? 'A' : char).join('');
    return answer;
}