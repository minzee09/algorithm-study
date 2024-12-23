function solution(my_string, alp) {
    var answer = my_string.split('').map(char => char === alp ? alp.toUpperCase() : char).join('');
    return answer;
}