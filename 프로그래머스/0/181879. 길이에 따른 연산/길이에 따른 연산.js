function solution(num_list) {
    var answer = num_list.length < 11 ? num_list.reduce((acc, cur) => acc * cur, 1) : num_list.reduce((acc, cur) => acc + cur, 0);
    return answer;
}