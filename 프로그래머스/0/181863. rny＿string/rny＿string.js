function solution(rny_string) {
    var answer = rny_string.split('').map( char => char === 'm' ? 'rn' : char).join('');
    return answer;
}