function solution(num_str) {
    var answer = num_str.split('');
    return num_str.split('').reduce((a,b) => Number(a)+Number(b));
}