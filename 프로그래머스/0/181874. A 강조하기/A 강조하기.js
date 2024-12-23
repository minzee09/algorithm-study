function solution(myString) {
    var answer = myString.split('').map(char => char === 'a' || char === 'A' ? 'A' : char.toLowerCase()).join('');
    return answer;
}