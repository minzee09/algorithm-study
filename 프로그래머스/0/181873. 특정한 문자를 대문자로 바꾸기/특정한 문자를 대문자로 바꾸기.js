function solution(my_string, alp) {
    let answer = '';
    for (str of my_string) {
        answer += (str === alp ? str.toUpperCase() : str);
    }
    return answer;
}
