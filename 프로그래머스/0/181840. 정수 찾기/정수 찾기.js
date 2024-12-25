function solution(num_list, n) {
    var answer = num_list.filter(num => num === n);
    return answer.length > 0 ? 1 : 0;
}